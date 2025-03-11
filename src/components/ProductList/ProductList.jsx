import React, { useEffect, useCallback, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/productsSlice";
import Cart from "../Cart/Cart";

const ProductList = () => {
  const products = useSelector(selectProducts);
  const productsInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalPrice1 = productsInCart.reduce(
    (sum, item) => item.price * item.count + sum,
    0
  );
  const [isVisibleCart, setIsVisibleCart] = useState(false);

  const { tg, queryId } = useTelegram();

  useEffect(() => {
    if (productsInCart.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();

      tg.MainButton.setParams({
        text: `Купить за ${totalPrice1}₽`,
      });
    }
  }, [totalPrice1, productsInCart]);

  const onSendData = useCallback(() => {
    setIsVisibleCart((prev) => !prev);
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  return (
    <>
      {!isVisibleCart ? (
        <div className={styles.list}>
          {products.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
        </div>
      ) : (
        <Cart />
      )}
    </>
  );
};

export default ProductList;
