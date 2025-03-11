import React, { useEffect, useCallback, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import { useTelegramButton } from "../../hooks/useTelegramButton";

const ProductList = () => {
  const navigate = useNavigate();
  const products = useSelector(selectProducts);
  const productsInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const { tg, queryId } = useTelegram();

  // useEffect(() => {
  //   if (productsInCart.length === 0) {
  //     tg.MainButton.hide();
  //   } else {
  //     tg.MainButton.show();
  //     tg.MainButton.setParams({
  //       text: `Посмотреть заказ`,
  //     });
  //   }
  // }, [productsInCart]);
  useTelegramButton(`Посмотреть заказ`, productsInCart.length === 0);

  const onClickMainButton = useCallback(() => {
    navigate("/cart");
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onClickMainButton);

    return () => {
      tg.offEvent("mainButtonClicked", onClickMainButton);
    };
  }, []);

  return (
    <>
      <div className={styles.list}>
        {products.map((item) => {
          return <ProductItem key={item.id} product={item} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
