import { useState, useEffect } from "react";
import styles from "./ProductItem.module.scss";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItem, increaseItem } from "../../store/cartSlice.js";
import { decreaseItem } from "../../store/cartSlice.js";
import { Link } from "react-router-dom";

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
              type={"plus"}
              title={"+"}
              onClick={onIncreaseHandler}
              style={{ minWidth: "43px" }}
            />{" "}
            <Button
              type={"minus"}
              title={"-"}
              onClick={onDecreaseHandler}
              style={{ minWidth: "43px" }}
            />
          </div>
        ) : (
          <>
            <Button
              type={"add"}
              title={"Добавить"}
              onClick={onAddHandler}
              style={{ alignSelf: "center" }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
