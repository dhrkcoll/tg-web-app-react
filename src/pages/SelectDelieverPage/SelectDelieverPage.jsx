import { useSelector } from "react-redux";
import styles from "./SelectDelieverPage.module.scss";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SelectDelieverPage = () => {
  const delieveryAdresses = useSelector(
    (state) => state.location.deliveryAdresses
  );
  return (
    <section className={styles.container}>
      <div className={styles.delieverSection}>
        <div className={styles.delieverSectionContent}>
          <div className={styles.adressesListContent}>
            <h2 className={styles.adressesListTitle}>Выберите адрес</h2>
            <ul className={styles.adressesList}>
              {delieveryAdresses.map((adress, index) => {
                <li key={index} className={styles.adressesListItem}>
                  <div className={styles.adressesListText}>
                    <p></p>
                    <span></span>
                  </div>
                </li>;
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
