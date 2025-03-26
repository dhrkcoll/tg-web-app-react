import { useEffect, useCallback } from "react";
import styles from "./SelectPaymentMethod.module.scss";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectPaymentMethods } from "../../store/paymentSlice";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";

const SelectPaymentMethod = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const dispatch = useDispatch();
  const possiblePayments = useSelector(selectPaymentMethods);
  const paymentMethodId = useSelector((state) => state.payment.paymentMethod);

  const handleSelect = (methodId) => {
    dispatch(setPaymentMethod(methodId));
    navigate(-1);
  };

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
                    handleSelect(item.id);
                  }}
                >
                  <div className={styles.content}>
                    <div className={styles.text}>
                      <div className={styles.div2}>{item.name}</div>
                    </div>
                    {item.id === paymentMethodId && (
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
