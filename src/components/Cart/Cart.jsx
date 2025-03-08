import React from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import image from "../../../public/860.png";
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
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1 className={styles.title}>Твои заказы</h1>
        <button className={styles.button}>Изменить</button>
      </div>

      <ul>
        {products.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.itemInner}>
                <div className={styles.image}>
                  <img src={"../../../public/860.jpg"} alt="" />
                </div>

                <div>
                  <h2 className={styles.itemTitle}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>

              <div className={styles.price}>{item.price} руб.</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
