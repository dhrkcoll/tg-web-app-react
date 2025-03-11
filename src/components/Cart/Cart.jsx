import { useEffect } from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useTelegramButton } from "../../hooks/useTelegramButton";

const Cart = () => {
  const { tg } = useTelegram();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // useEffect(() => {
  //   if (productsInCart.length === 0) {
  //     tg.MainButton.hide();
  //   } else {
  //     tg.MainButton.show();
  //     tg.MainButton.setParams({
  //       text: `Сделать заказ на ${totalPrice}`,
  //     });
  //   }
  // }, [productsInCart]);
  useTelegramButton(`Сделать заказ на ${totalPrice}₽`, cartItems !== 0);

  if (!cartItems) {
    return <div>Корзина пуста</div>;
  }

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
