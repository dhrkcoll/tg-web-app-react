import React from "react";
import styles from "./SelectPage.module.scss";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const SelectPage = () => {
  return (
    <div className={styles.selectPageContainer}>
      <div className={styles.catalogRestaurantsList}>
        <div className={styles.body}>
          <div className={styles.sectionListAddresses}>
            <div className={styles.head}>
              <div className={styles.title}>Выберите адрес</div>
            </div>
            <div className={styles.listAddresses}>
              <div className={styles.listAddressesItem}>
                <div className={styles.content}>
                  <div className={styles.text}>
                    <div className={styles.address}>Зилаир, ул. Ленина 25</div>
                    <div className={styles.fullAddress}>
                      Россия, Зилаир, Ленина, 25
                    </div>
                  </div>
                  <div className={styles.checkmarkIcon}>
                    <FaCheck />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
