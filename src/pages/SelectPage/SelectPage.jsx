import { useEffect, useCallback } from "react";
import styles from "./SelectPage.module.scss";
import { FaCheck } from "react-icons/fa";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectStreet } from "../../store/citiesSlice";

const SelectPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const selectedCity = useSelector((state) => state.cities.selectedCity);
  const selectedStreet = useSelector((state) => state.cities.selectedStreet);

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

  const handleSelectStreet = (street) => {
    dispatch(selectStreet(street));
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
                    className={styles.listAddressesItem}
                    onClick={() => handleSelectStreet(street)}
                  >
                    <div className={styles.content}>
                      <div className={styles.text}>
                        <div className={styles.address}>
                          {selectedCity.name}, ул. {street.name} {street.number}
                        </div>
                        <div className={styles.fullAddress}>
                          Россия, {selectedCity.name}, {street.name},{" "}
                          {street.number}
                        </div>
                      </div>
                      {selectedStreet === street ? (
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

export default SelectPage;
