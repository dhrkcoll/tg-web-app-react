import React from "react";
import styles from "./ProductItem.module.scss";
import Button from "../Button/Button.jsx";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };
  return (
    <div>
      <div className={styles.img}></div>

      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>

      <Button className={styles.add - btn} onClick={onAddHandler}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductItem;
