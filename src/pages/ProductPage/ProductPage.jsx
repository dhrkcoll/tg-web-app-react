import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/productsSlice";
import styles from "./ProductPage.module.scss";
import { FaAngleRight } from "react-icons/fa6";
import useBackButton from "../../hooks/useTelegramBackButton.js";
import { useTelegramButton } from "../../hooks/useTelegramButton.js";

const ProductPage = () => {
  const productsInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const { productId } = useParams();

  const product = useSelector(selectProductById(productId));

  useBackButton();
  useTelegramButton(`Купить за ${totalPrice}₽`, productsInCart.length === 0);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productCard}>
        <div className={styles.productCardContent}>
          <div
            className={styles.productCardPicture}
            style={{ backgroundImage: `url(${product.image_path})` }}
          ></div>
          <div className={styles.productCardInfoPlace}>
            <div className={styles.productCardInfo}>
              <div className={styles.productCardInfoHeader}>
                <div className={styles.productTitle}>
                  <h1 className={styles.productName}>{product.title}</h1>
                  <p className={styles.productSizeAndWeight}>32см, 552г</p>
                </div>

                <p className={styles.productPrice}>{product.price}₽</p>
              </div>
              <p className={styles.productDescription}>{product.description}</p>

              {product?.size ? <div className={styles.productSizes}></div> : ""}
            </div>
            <div className={styles.charsButton}>
              <div className={styles.charsButtonContent}>
                <div className={styles.charsButtonText}>
                  <div className={styles.charsTitle}>Свойства</div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
