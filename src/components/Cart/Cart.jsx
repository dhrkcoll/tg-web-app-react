import React from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1 className={styles.title}>Твои заказы</h1>
        <button className={styles.button}>Изменить</button>
      </div>

      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.image}>
                <img src={item.image_path} alt="" />
              </div>

              <div className={styles.label}>
                <h2 className={styles.itemTitle}>
                  {item.title} <span>{item?.count}</span>
                </h2>
                <p className={styles.description}>{item.description}</p>
              </div>

              <div className={styles.price}>{item.price}₽</div>
            </li>
          );
        })}
      </ul>

      <div className={styles.textField}>
        <textarea
          rows={1}
          placeholder="Добавьте комментарий"
          name=""
          id=""
        ></textarea>

        <div className={styles.textFieldHint}>
          Any special requests, details, final wishes etc.
        </div>
      </div>
    </div>
  );
};

export default Cart;
