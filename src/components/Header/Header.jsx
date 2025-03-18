import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram.js";
import { Link, useSearchParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
  const [selectedDelivery, setSelectedDelivery] = React.useState("pickup");
  const { user, onClose } = useTelegram();
  const selectedCity = useSelector((state) => state.cities.selectedCity);

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
        <Link to={"/selectCity"} className={styles.headerCity}>
          <div className={styles.headerNameCity}>
            <div className={styles.div}>
              {selectedCity?.name ? selectedCity?.name : ""}
            </div>
          </div>
        </Link>
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
            {selectedDelivery === "delivery" ? (
              <>
                <CiDeliveryTruck />
                <div className={styles.text3}>
                  <Link to={"/select"}>
                    <div className={styles.address}>
                      Выберите адрес доставки
                    </div>
                    <div className={styles.iconRight}>
                      <FaAngleRight />
                    </div>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <CiDeliveryTruck />
                <div className={styles.text3}>
                  <Link to={"/select"}>
                    <div className={styles.address}>Выберите точку продаж</div>
                    <div className={styles.iconRight}>
                      <FaAngleRight />
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
