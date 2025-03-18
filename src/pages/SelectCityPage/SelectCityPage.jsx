import { useEffect, useCallback } from "react";
import styles from "./SelectCityPage.module.scss";
import { FaCheck } from "react-icons/fa";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCity } from "../../store/citiesSlice";

const SelectCityPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const cities = useSelector((state) => state.cities.cities);
  const selectedCity = useSelector((state) => state.cities.selectedCity);

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

  const handleSelectCity = (city) => {
    dispatch(selectCity(city));
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
            {cities.map((city, index) => {
              return (
                <div
                  key={city.id}
                  className={styles.listAddresses}
                  onClick={() => handleSelectCity(city)}
                >
                  <div className={styles.listAddressesItem}>
                    <div className={styles.content}>
                      <div className={styles.text}>
                        <div className={styles.address}>{city.name}</div>
                      </div>
                      {city.id === selectedCity.id && (
                        <div className={styles.checkmarkIcon}>
                          <FaCheck />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCityPage;
