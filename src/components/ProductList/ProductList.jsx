import React, { useEffect, useCallback, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import { useTelegramButton } from "../../hooks/useTelegramButton";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProducts);
  const productsInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const selectedAddress = useSelector(
    (state) => state.location.selectedAddress
  );
  const deliveryMethod = useSelector((state) => state.location.deliveryMethod);

  const { tg, queryId } = useTelegram();

  useTelegramButton(`Посмотреть заказ`, productsInCart.length !== 0);

  const onClickMainButton = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  // useEffect(() => {
  //   if (storeId) {
  //     dispatch(fetchProducts(storeId));
  //   }
  // }, [dispatch, storeId]);
  useEffect(() => {
    tg.onEvent("mainButtonClicked", onClickMainButton);

    return () => {
      tg.offEvent("mainButtonClicked", onClickMainButton);
    };
  }, []);

  return (
    <>
      <div className={styles.list}>
        {selectedAddress ? (
          products.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })
        ) : (
          <div>
            {deliveryMethod === "delivery" ? (
              <div className={styles.notFoundProductsSection}>
                <div className={styles.notFoundProductsImg}>
                  <img src="" alt="" />
                </div>
                <div className={styles.notFoundProductsTitle}>
                  <h2>Выберите адрес доставки</h2>
                </div>
                <div
                  className={styles.notFoundProductsButton}
                  onClick={() => navigate("/select-deliever")}
                >
                  <button>Выбрать</button>
                </div>
              </div>
            ) : (
              <div className={styles.notFoundProductsSection}>
                <div className={styles.notFoundProductsImg}>
                  <img src="" alt="" />
                </div>
                <div className={styles.notFoundProductsTitle}>
                  <h2>Выберите точку продаж</h2>
                </div>
                <div
                  className={styles.notFoundProductsButton}
                  onClick={() => navigate("/select-pickup")}
                >
                  <button>Выбрать</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
