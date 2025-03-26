import { useEffect, useCallback } from "react";
import styles from "./SelectPickupPage.module.scss";
import { FaCheck } from "react-icons/fa";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAdress } from "../../store/locationSlice";

const SelectPickupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const selectedAdress = useSelector((state) => state.location.selectedAdress);

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

  const handleSelectAdress = (street) => {
    dispatch(selectAdress(street));
    navigate("/");
  };

  return (
    <div className={styles.selectPageContainer}>
      <div className={styles.catalogRestaurantsList}>
        <div className={styles.body}>
          <div className={styles.sectionListAddresses}>
            <div className={styles.head}>
              <div className={styles.title}>Выберите адрес</div>
            </div>

            <div className={styles.listAddresses}>
              {selectedCity.streets.map((street, index) => {
                return (
                  <div
                    key={index}
                    className={styles.listAddressesItem}
                    onClick={() => handleSelectAdress(street)}
                  >
                    <div className={styles.content}>
                      <div className={styles.text}>
                        <div className={styles.address}>
                          {selectedCity.name}, ул. {street.street}{" "}
                          {street.apartment}
                        </div>
                        <div className={styles.fullAddress}>
                          Россия, {selectedCity.name}, {street.street},{" "}
                          {street.house}
                        </div>
                      </div>
                      {selectedAdress?.street === street.street &&
                      selectedAdress?.street === street.street ? (
                        <div className={styles.checkmarkIcon}>
                          <FaCheck />
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPickupPage;
