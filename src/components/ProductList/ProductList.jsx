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
    title: "Burger",
    price: 200,
    description: "Its much more tasty burger",
    image_path: image,
  },
  {
    id: 2,
    title: "Burger",
    price: 200,
    description: "Its much more tasty burger",
    image_path: image,
  },
  {
    id: 3,
    title: "Burger",
    price: 200,
    description: "Its much more tasty burger",
    image_path: image,
  },
  {
    id: 4,
    title: "Burger",
    price: 200,
    description: "Its much more tasty burger",
    image_path: image,
  },
  {
    id: 5,
    title: "Burger",
    price: 200,
    description: "Its much more tasty burger",
    image_path: image,
  },
  {
    id: 6,
    title: "Burger",
    price: 200,
    description: "Its much more tasty burger",
    image_path: image,
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
