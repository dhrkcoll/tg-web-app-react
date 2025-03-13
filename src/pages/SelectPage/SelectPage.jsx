import { useEffect, useCallback } from "react";
import styles from "./SelectPage.module.scss";
import { FaCheck } from "react-icons/fa";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";

const SelectPage = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();

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
