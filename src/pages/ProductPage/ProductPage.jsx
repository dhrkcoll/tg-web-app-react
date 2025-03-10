import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/productsSlice";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const { productId } = useParams();
  const product = useSelector(selectProductById(productId));

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
