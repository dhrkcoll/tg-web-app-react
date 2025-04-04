import styles from "./SelectPickupPage.module.scss";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAddress } from "../../store/locationSlice.js";
import useBackButton from "../../hooks/useTelegramBackButton.js";

const SelectPickupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedCity = useSelector((state) => state.location.selectedCity);
  const selectedAddress = useSelector(
    (state) => state.location.selectedAddress
  );

  useBackButton();

  const handleSelectAdress = (street) => {
    dispatch(selectAddress(street));
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
                      {selectedAddress?.street === street.street &&
                      selectedAddress?.street === street.street ? (
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
