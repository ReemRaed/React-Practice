import styles from "../styles/Product.module.scss";
const Product = ({ product }) => {
  return (
    <article className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt="product"
      />
      <div className={styles.product__content}>
          <h3 className={styles.product__title}>{product.title}</h3>
          <p className={styles.product__price}>${product.price}</p>
          <p>{product.description}</p>
      </div>
    </article>
  );
};

export default Product;
