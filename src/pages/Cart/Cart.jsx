import { useEffect, useCallback } from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useTelegramButton } from "../../hooks/useTelegramButton.js";
import useBackButton from "../../hooks/useTelegramBackButton.js";

const Cart = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useTelegramButton(`Сделать заказ на ${totalPrice}₽`, cartItems !== 0);
  useBackButton();

  const onClickMainButton = useCallback(() => {
    navigate("/order");
  }, []);
  useEffect(() => {
    tg.onEvent("mainButtonClicked", onClickMainButton);

    return () => {
      tg.offEvent("mainButtonClicked", onClickMainButton);
    };
  }, []);

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
