import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SelectDelieverPage.module.scss";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useTelegramButton } from "../../hooks/useTelegramButton.js";
import { selectAdress } from "../../store/locationSlice";
import { FaCheck } from "react-icons/fa";

const SelectDelieverPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const delieveryAdresses = useSelector(
    (state) => state.location.deliveryAdresses
  );
  const selectedAdress = useSelector((state) => state.location.selectedAdress);

  const handleSelectAdress = (street) => {
    dispatch(selectAdress(street));
    navigate("/");
  };

  console.log(delieveryAdresses);
  useTelegramButton("", false);
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
                    <div className={styles.adressesListText}>
                      <div>
                        <p>{adress.formattedAddress}</p>
                        <span>{`Подъезд: ${
                          adress.entrance ? adress.entrance : ""
                        }, Этаж: ${
                          adress.floor ? adress.floor : ""
                        }, Квартира: ${
                          adress.apartment ? adress.apartment : ""
                        }, Комментарий: ${
                          adress.userComment ? adress.userComment : ""
                        }`}</span>
                      </div>
                    </div>
                    {adress.locality === selectAdress.locality ? (
                      <FaCheck />
                    ) : (
                      ""
                    )}
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
