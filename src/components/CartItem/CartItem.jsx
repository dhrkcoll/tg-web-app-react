import React from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  const totalPrice = item.count * item.price;
  return (
    <li key={item.id} className={styles.item}>
      <div className={styles.image}>
        <img src={item.image_path} alt={item.title} />
      </div>

      <div className={styles.label}>
        <h2 className={styles.itemTitle}>
          {item.title} <span>{item?.count}Х</span>
        </h2>
      </div>

      <div className={styles.price}>{totalPrice}₽</div>
    </li>
  );
};

export default CartItem;
