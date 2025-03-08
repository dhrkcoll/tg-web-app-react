import React from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return <div className={styles.cart}></div>;
};

export default Cart;
