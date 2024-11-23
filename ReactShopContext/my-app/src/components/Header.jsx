import CartModel from "./CartModel";
import styles from "../styles/Header.module.scss";
import { useRef } from "react";
const Header = () => {
  const modal = useRef();

  const handleClick = () => {
    modal.current.open();
  };

  return (
    <header className={styles.header}>
      <CartModel ref={modal} title="shop Cart" />
      <div className={styles.header__mainTitle}>
        <img className={styles.header__img} src="./logo.png" alt="logo" />
        <p className={styles.header__title}>Elegant Context</p>
      </div>
      <button className={styles.header__btn} onClick={handleClick}>
        Cart
      </button>
    </header>
  );
};

export default Header;
