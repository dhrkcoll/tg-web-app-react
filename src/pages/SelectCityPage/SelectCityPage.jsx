import styles from "./SelectCityPage.module.scss";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCity } from "../../store/locationSlice";
import useBackButton from "../../hooks/useTelegramBackButton.js";

const SelectCityPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cities = useSelector((state) => state.shops.cities);
  const selectedCity = useSelector((state) => state.location.selectedCity);

  useBackButton();

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
                      {city.id === selectedCity?.id && (
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
