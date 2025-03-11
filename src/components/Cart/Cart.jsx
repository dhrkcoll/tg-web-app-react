import React from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1 className={styles.title}>Твои заказы</h1>
        <button className={styles.button}>
          <Link to={"/"} style={{ color: "white" }}>
            Изменить
          </Link>
        </button>
      </div>

      <ul>
        {cartItems.map((item) => {
          return <CartItem item={item} />;
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
