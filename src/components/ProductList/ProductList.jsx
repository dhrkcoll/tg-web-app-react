import React from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram.js";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const products = [
  { id: 1, title: "Jeans", price: 5000, description: "Blue, straight" },
  { id: 2, title: "Jacket", price: 12000, description: "Black" },
  { id: 3, title: "Shoes", price: 3000, description: "Yellow" },
  { id: 4, title: "Hat", price: 1000, description: "Brown" },
  { id: 5, title: "Dress", price: 16000, description: "Red" },
  { id: 6, title: "Both", price: 5000, description: "Blue, straight" },
];

const ProductList = () => {
  const [addedItems, setAddedItems] = React.useState([]);
  const { tg } = useTelegram();

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
  return (
    <div className={styles.list}>
      {products.map((item) => {
        return <ProductItem product={item} onAdd={onAdd} className={"item"} />;
      })}
    </div>
  );
};

export default ProductList;
