import React, { useEffect, useCallback, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram.js";
import image from "../../../public/860.png";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const products = [
  {
    id: 1,
    title: "Бургер",
    price: 200,
    description: "Бургер с котлетой>",
    image_path:
      "https://recipes.av.ru//media/recipes/100608_picture_XNlaEKL.jpg",
  },
  {
    id: 2,
    title: "Чизбургер",
    price: 300,
    description: "Чизбургер с сыром",
    image_path:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Burger_King_Quad_Stacker_cheeseburger.jpg",
  },
  {
    id: 3,
    title: "Пицца четыре сезона",
    price: 200,
    description: "Пицца с четыремя начинками",
    image_path:
      "https://n1s1.hsmedia.ru/59/36/c9/5936c9e68910131291645f5a16f64ff5/728x546_1_1433a5b929e0c874a97a0294863f7d17@1706x1280_0xQG2bzfJA_6913784370140981657.jpg.webp",
  },
  {
    id: 4,
    title: "Хот-Дог",
    price: 150,
    description: "Горячая но не собака",
    image_path:
      "https://images.gastronom.ru/EgeRAvZr5uieLU3HG5Do-YZMxMKY7aq29aDHkks7tyM/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzNhNmFmZWY3LTE3N2YtNGRhOC1hMWI3LWJiZTEyZmVjOGM1Yi5qcGc.webp",
  },
  {
    id: 5,
    title: "Пицца пепперони",
    price: 200,
    description: "Пицца с острым салями",
    image_path:
      "https://www.chefmarket.ru/blog/wp-content/uploads/2020/07/hot-homemade-pepperoni-2000x1200.jpg",
  },
  {
    id: 6,
    title: "Попкорн",
    price: 200,
    description: "Сладкий попкорн",
    image_path:
      "https://e52e3ee2-628b-49a9-9e26-e5a61fd72b20.selcdn.net/upload/webp/b2d/1920_1080_1/%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD.webp",
  },
];

const ProductList = () => {
  const [addedItems, setAddedItems] = React.useState([]);
  const { tg, queryId } = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy ${getTotalPrice(newItems)}`,
      });
    }
  };

  const onSendData = React.useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };

    fetch(`http://localhost:8000/web-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  return (
    <div className={styles.list}>
      {products.map((item) => {
        return <ProductItem key={item.id} product={item} onAdd={onAdd} />;
      })}
    </div>
  );
};

export default ProductList;
