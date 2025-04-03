import { useState, useEffect } from "react";
import styles from "./ProductItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice.js";
import { decreaseItem } from "../../store/cartSlice.js";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button.jsx";

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
    dispatch(addItem(product));
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
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <div className={styles.product}>
      <div className={styles.productInner}>
        <Link to={`/products/${product.id}`}>
          <div
            className={styles.productImage}
            style={{ backgroundImage: `url(${product.image_path})` }}
          >
            <div className={styles.reviews}>
              <div className={styles.rating}>
                <div className={styles.ratingIcon}>
                  <img
                    src="https://miniapp.chatfood.org/img/group-30.d629f4d9.svg"
                    alt="rating"
                  />
                </div>

                <div className={styles.ratingCount}>
                  {product.rating ? product.rating : 0}
                </div>
              </div>
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
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h2 className={styles.productTitle}>{product.title}</h2>

            <div>|</div>

            <div className={styles.productPrice}>{product.price}₽</div>
          </div>
        </Link>
        {amountProduct?.count > 0 ? (
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignSelf: "center",
            }}
          >
            <Button
              title={"+"}
              onClick={onIncreaseHandler}
              className={styles.plus}
            />
            <Button
              title={"-"}
              onClick={onDecreaseHandler}
              className={styles.minus}
            />
          </div>
        ) : (
          <>
            <Button
              title={"Добавить"}
              onClick={onAddHandler}
              className={styles.add}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
