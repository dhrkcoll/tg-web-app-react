import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram.js";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
  const [selectedDelivery, setSelectedDelivery] = React.useState("pickup");
  const { user, onClose } = useTelegram();

  const handleDeliveryChange = (type) => {
    setSelectedDelivery(type);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuBtn}>
          <Link to={"/menu"}>
            <div className={styles.headerMenuIcon}>
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-v-05e3cd0d=""
              >
                <path
                  d="M17.2174 6.21729H0.782596C0.350376 6.21729 0 6.56766 0 6.99988C0 7.4321 0.350376 7.78248 0.782596 7.78248H17.2174C17.6496 7.78248 18 7.4321 18 6.99988C18 6.56766 17.6496 6.21729 17.2174 6.21729Z"
                  data-v-05e3cd0d=""
                ></path>
                <path
                  d="M0.782596 2.30445H17.2174C17.6496 2.30445 18 1.95407 18 1.52185C18 1.08963 17.6496 0.739258 17.2174 0.739258H0.782596C0.350376 0.739258 0 1.08963 0 1.52185C0 1.95407 0.350376 2.30445 0.782596 2.30445Z"
                  data-v-05e3cd0d=""
                ></path>
                <path
                  d="M17.2174 11.6958H0.782596C0.350376 11.6958 0 12.0462 0 12.4784C0 12.9107 0.350376 13.261 0.782596 13.261H17.2174C17.6496 13.261 18 12.9107 18 12.4784C18 12.0462 17.6496 11.6958 17.2174 11.6958Z"
                  data-v-05e3cd0d=""
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className={styles.headerCity}>
          <div className={styles.headerNameCity}>
            <div className={styles.div}>Зилаир</div>
          </div>
        </div>
        <div className={styles.searchBtn}>
          <div className={styles.iconSearch}>
            <svg
              data-v-05e3cd0d=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-05e3cd0d=""
                d="M15.708 14.2968L12.611 11.1987C14.9283 8.10223 14.2965 3.71356 11.1997 1.39641C8.10291 -0.920736 3.71387 -0.288925 1.39653 2.80759C-0.920813 5.90411 -0.28895 10.2928 2.80783 12.6099C5.29542 14.4713 8.71207 14.4713 11.1997 12.6099L14.298 15.708C14.6874 16.0973 15.3187 16.0973 15.708 15.708C16.0973 15.3187 16.0973 14.6875 15.708 14.2982L15.708 14.2968ZM7.02958 12.012C4.27731 12.012 2.04618 9.78103 2.04618 7.02899C2.04618 4.27695 4.27731 2.04601 7.02958 2.04601C9.78185 2.04601 12.013 4.27695 12.013 7.02899C12.01 9.77978 9.78063 12.009 7.02958 12.012Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <section className={styles.sectionSelect}>
        <div className={styles.selectTypeDelivery}>
          <div className={styles.row}>
            <div className={styles.selectContent}>
              <div
                className={`${styles.item} ${
                  selectedDelivery === "delivery" ? styles.active : ""
                }`}
                onClick={() => handleDeliveryChange("delivery")}
              >
                <div className={styles.text}>
                  <div className={styles.div2}>Доставка</div>
                </div>
              </div>
              <div
                className={`${styles.item} ${
                  selectedDelivery === "pickup" ? styles.active : ""
                }`}
                onClick={() => handleDeliveryChange("pickup")}
              >
                <div className={styles.text}>
                  <div className={styles.div2}>Самовывоз</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.selectAddress}>
          <div className={styles.menuContentItem}>
            <svg
              data-v-103ac670=""
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                data-v-103ac670=""
                d="M15.125 7.5C15.0915 8.92533 14.7368 10.3247 14.0876 11.5941C13.4383 12.8634 12.5111 13.9699 11.375 14.8312V17.25C11.375 17.4489 11.296 17.6397 11.1553 17.7803C11.0147 17.921 10.8239 18 10.625 18C10.4261 18 10.2353 17.921 10.0947 17.7803C9.95402 17.6397 9.875 17.4489 9.875 17.25V1.5C9.86827 1.2182 9.94528 0.94073 10.0963 0.702697C10.2473 0.464663 10.4655 0.276758 10.7233 0.16275C11.0194 0.0422739 11.3442 0.0106726 11.658 0.0718081C11.9718 0.132944 12.261 0.284168 12.4902 0.507C14.2298 2.41572 15.1725 4.91797 15.125 7.5ZM6.875 0C6.67609 0 6.48532 0.0790176 6.34467 0.21967C6.20402 0.360322 6.125 0.551088 6.125 0.75V5.25C6.12308 5.7137 5.97794 6.16547 5.70943 6.54352C5.44093 6.92158 5.06218 7.20744 4.625 7.362V0.75C4.625 0.551088 4.54598 0.360322 4.40533 0.21967C4.26468 0.0790176 4.07391 0 3.875 0C3.67609 0 3.48532 0.0790176 3.34467 0.21967C3.20402 0.360322 3.125 0.551088 3.125 0.75V7.362C2.68782 7.20744 2.30907 6.92158 2.04057 6.54352C1.77206 6.16547 1.62692 5.7137 1.625 5.25V0.75C1.625 0.551088 1.54598 0.360322 1.40533 0.21967C1.26468 0.0790176 1.07391 0 0.875 0C0.676088 0 0.485322 0.0790176 0.34467 0.21967C0.204018 0.360322 0.125 0.551088 0.125 0.75V5.25C0.126091 6.11415 0.425068 6.95151 0.971539 7.62094C1.51801 8.29036 2.27856 8.75093 3.125 8.925V17.25C3.125 17.4489 3.20402 17.6397 3.34467 17.7803C3.48532 17.921 3.67609 18 3.875 18C4.07391 18 4.26468 17.921 4.40533 17.7803C4.54598 17.6397 4.625 17.4489 4.625 17.25V8.925C5.47144 8.75093 6.23199 8.29036 6.77846 7.62094C7.32493 6.95151 7.62391 6.11415 7.625 5.25V0.75C7.625 0.551088 7.54598 0.360322 7.40533 0.21967C7.26468 0.0790176 7.07391 0 6.875 0Z"
              ></path>
            </svg>
            <div className={styles.text3}>
              <Link to={"/select"}>
                <div className={styles.address}>Зилаир, ул. Ленина 25</div>
                <div className={styles.iconRight}>
                  <FaAngleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
