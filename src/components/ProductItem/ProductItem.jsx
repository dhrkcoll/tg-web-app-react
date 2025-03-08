import { useState, useEffect } from "react";
import styles from "./ProductItem.module.scss";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItem, increaseItem } from "../../store/cartSlice.js";
import { decreaseItem } from "../../store/cartSlice.js";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const amountProduct = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const [isAnimating, setIsAnimating] = useState(false);

  const onAddHandler = () => {
    dispatch(addItem(product));
    setIsAnimating(true);
  };
  const onIncreaseHandler = () => {
    dispatch(increaseItem(product));
    setIsAnimating(true);
  };
  const onDecreaseHandler = () => {
    dispatch(decreaseItem(product));
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Длительность анимации

      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src="../../../public/860.png" alt={product.title} />
      </div>

      <div>
        {amountProduct?.count >= 1 ? (
          <span
            className={`${styles.amountProduct} ${
              isAnimating ? styles.popAnimation : ""
            }`}
          >
            {amountProduct.count}
          </span>
        ) : (
          ""
        )}
        <h2 className={styles.productTitle}>{product.title}</h2>

        <div className={styles.productPrice}>
          <div>Стоимость:</div>
          {product.price}руб.
        </div>
      </div>
      {amountProduct?.count >= 1 ? (
        <div>
          <Button type={"plus"} title={"+"} onClick={onIncreaseHandler} />{" "}
          <Button type={"minus"} title={"-"} onClick={onDecreaseHandler} />
        </div>
      ) : (
        <>
          <Button type={"add"} title={"Добавить"} onClick={onAddHandler} />
        </>
      )}
    </div>
  );
};

export default ProductItem;
