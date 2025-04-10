import styles from "./SelectPaymentMethod.module.scss";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPaymentMethods,
  setPaymentMethod,
} from "../../store/paymentSlice";
import { useNavigate } from "react-router-dom";
import useBackButton from "../../hooks/useTelegramBackButton.js";

const SelectPaymentMethod = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const possiblePayments = useSelector(selectPaymentMethods);
  const paymentMethodId = useSelector((state) => state.payment.paymentMethod);

  const handleSelect = (method) => {
    dispatch(setPaymentMethod(method));
    navigate(-1);
  };

  useBackButton();

  return (
    <section className={styles.paymentMethods}>
      <div className={styles.iosCatalogCities}>
        <div className={styles.body}>
          <div className={styles.sectionListAddresses}>
            <div className={styles.head}>
              <div className={styles.div}>Payment Options</div>
            </div>

            <div className={styles.listCities}>
              {possiblePayments.map((item, index) => (
                <div
                  key={item.id}
                  className={styles.listCitiesItem}
                  onClick={() => {
                    handleSelect(item);
                  }}
                >
                  <div className={styles.content}>
                    <div className={styles.text}>
                      <div className={styles.div2}>{item.name}</div>
                    </div>
                    {item.id === paymentMethodId.id && (
                      <div className={styles.icons16Checkmark}>
                        <FaCheck />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectPaymentMethod;
