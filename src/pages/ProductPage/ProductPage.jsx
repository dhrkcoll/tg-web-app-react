import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/productsSlice";
import styles from "./ProductPage.module.scss";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const productsInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const { productId } = useParams();

  const product = useSelector(selectProductById(productId));

  const onClickBackButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    if (!window.Telegram || !tg) {
      return;
    }
    const backButton = tg.BackButton;

    backButton.show();
    backButton.onClick(onClickBackButton);

    return () => {
      backButton.hide();
      backButton.offClick(onClickBackButton);
    };
  }, [tg, onClickBackButton]);

  useEffect(() => {
    if (productsInCart.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить за ${totalPrice}₽`,
      });
    }
  }, [totalPrice, productsInCart]);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className={styles.productContainer}>
      <img src={product.image_path} alt={product.title} />
      <h1 className={styles.productTitle}>{product.title}</h1>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>{product.price}₽</p>
    </div>
  );
};

export default ProductPage;
