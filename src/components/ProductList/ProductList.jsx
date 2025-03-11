import React, { useEffect, useCallback, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/productsSlice";

const ProductList = () => {
  const products = useSelector(selectProducts);
  const productsInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalPrice1 = productsInCart.reduce(
    (sum, item) => item.price * item.count + sum,
    0
  );

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

  const onSendData = React.useCallback(() => {}, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  return (
    <>
      <div className={styles.list}>
        {products.map((item) => {
          return <ProductItem key={item.id} product={item} />;
        })}
      </div>
      <div>{totalPrice1}</div>
    </>
  );
};

export default ProductList;
