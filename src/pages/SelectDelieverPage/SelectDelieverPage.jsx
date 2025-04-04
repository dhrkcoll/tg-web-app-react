import { useDispatch, useSelector } from "react-redux";
import styles from "./SelectDelieverPage.module.scss";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useTelegramButton } from "../../hooks/useTelegramButton.js";
import { selectAddress } from "../../store/locationSlice";
import { FaCheck } from "react-icons/fa";
import useBackButton from "../../hooks/useTelegramBackButton.js";

const SelectDelieverPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const delieveryAdresses = useSelector(
    (state) => state.adresses.savedAddresses
  );
  const selectedAddress = useSelector(
    (state) => state.location.selectedAddress
  );

  const handleSelectAdress = (street) => {
    dispatch(selectAddress(street));
    navigate("/");
  };

  useTelegramButton("", false);
  useBackButton();

  return (
    <section className={styles.container}>
      <div className={styles.delieverSection}>
        <div className={styles.delieverSectionContent}>
          <div className={styles.adressesListContent}>
            <h2 className={styles.adressesListTitle}>Выберите адрес</h2>
            <ul className={styles.adressesList}>
              {delieveryAdresses.map((adress, index) => {
                return (
                  <li
                    key={index}
                    className={styles.adressesListItem}
                    onClick={() => {
                      handleSelectAdress(adress);
                    }}
                  >
                    <div className={styles.content}>
                      <div className={styles.adressesListText}>
                        <div>
                          <p>{adress.formattedAddress}</p>
                          <span>{`Подъезд: ${
                            adress.entrance ? adress.entrance : "-"
                          }, Этаж: ${
                            adress.floor ? adress.floor : "-"
                          }, Квартира: ${
                            adress.house ? adress.house : "-"
                          }, Комментарий: ${
                            adress.userComment ? adress.userComment : "-"
                          }`}</span>
                        </div>
                      </div>
                      {adress.formattedAddress ===
                      selectedAddress?.formattedAddress ? (
                        <div className={styles.checkmarkIcon}>
                          <FaCheck />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.addSection}>
            <div className={styles.addSectionContent}>
              <Link to={"/add-adress"} className={styles.addSectionContentItem}>
                <div className={styles.add}>
                  <IoAddCircleOutline />
                </div>
                <div className={styles.text}>
                  <p>Добавить адрес</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectDelieverPage;
