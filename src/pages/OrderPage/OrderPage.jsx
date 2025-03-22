import { useEffect, useState } from "react";
import styles from "./OrderPage.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { PiCashRegisterLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useTelegram } from "../../hooks/useTelegram.js";

const OrderPage = () => {
  const { tg } = useTelegram();
  const goodsPrice = useSelector((state) => state.cart.totalPrice);
  const delieverPrice = 100;
  const totalPrice = goodsPrice + delieverPrice;
  const deliveryMethod = useSelector((state) => state.location.deliveryMethod);
  const selectAdress = useSelector((state) => state.location.selectedAdress);
  const [userPhone, setUserPhone] = useState();

  const handleSendData = () => {
    const data = JSON.stringify({ phone: "1234567890" });
    tg.sendData(data); // Отправляем данные
  };

  useEffect(() => {
    tg.onEvent("dataReceived", (data) => {
      console.log(data);
      const contact = JSON.parse(data);
      if (contact && contact.phone_number) {
        console.log("Получен номер телефона:", contact.phone_number);
        // Здесь вы можете сохранить номер телефона в состоянии или отправить его на сервер
      }
    });
  }, [tg]);

  return (
    <div className={styles.deliveryModule}>
      <div className={styles.deliveryBody}>
        <div className={styles.deliveryHeader}>
          {deliveryMethod === "delivery" ? "Доставка" : "Самовывоз"}
        </div>
        <div className={styles.deliveryAddress}>
          <div className={styles.addressContent}>
            <div className={styles.addressText}>
              <p>{selectAdress ? selectAdress.street : ""}</p>
            </div>
          </div>
        </div>
        <div className={styles.paymentSection}>
          <div className={styles.paymentHeader}>
            <div className={styles.paymentTitle}>Способ оплаты</div>
          </div>
          <div className={styles.paymentMethods}>
            <div className={styles.paymentMethodItem}>
              <div className={styles.paymentIcon}>
                <PiCashRegisterLight />
              </div>
              <div className={styles.paymentContent}>
                <div className={styles.paymentText}>Наличными</div>
                <div className={styles.paymentArrow}>
                  <FaAngleRight />
                </div>
              </div>
            </div>
            <div className={styles.paymentMethodItem}>
              <div className={styles.promoCodeIcon}>
                <CiDiscount1 />
              </div>
              <div className={styles.paymentContent}>
                <div className={styles.paymentText}>Промокод</div>
                <div className={styles.promoCodeText}>Указать</div>
              </div>
            </div>
            <div className={styles.paymentMethodItem}>
              <div className={styles.walletIcon}>
                <img
                  className={styles.iconImage}
                  src="/img/wallet.6422cead.svg"
                />
              </div>
              <div className={styles.paymentContent}>
                <div className={styles.paymentText}>Списать бонусы</div>
                <div className={styles.bonusSwitch}>
                  <div className={styles.switchElement}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paymentHint}>
            <div className={styles.hintText}>
              <span>
                У вас есть 00.00 бонусных рублей, из них вы можете списать 0.00₽
              </span>
            </div>
          </div>
        </div>
        <div className={styles.contactPhone}>
          <div className={styles.phoneItem}>
            <div className={styles.phoneIcon}>
              <FaPhoneAlt />
            </div>
            <div className={styles.phoneContent}>
              <div className={styles.phoneNumber}>{userPhone}</div>
              <div className={styles.phoneEdit} onClick={handleSendData}>
                Указать
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.inputLabel}>
            <div className={styles.labelText}>Комментарий к заказу</div>
          </div>
          <div className={styles.inputWrapper}>
            <input
              placeholder="Введите комментарий"
              type="text"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.inputLabel}>
            <div className={styles.labelText}>Сдача с суммы</div>
          </div>
          <div className={styles.inputWrapper}>
            <input
              placeholder="Введите сумму"
              type="text"
              className={styles.inputField}
            />
            <div className={styles.currencySymbol}>₽</div>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.inputLabel}>
            <div className={styles.labelText}>Количество приборов</div>
          </div>
          <div className={styles.inputWrapper}>
            <input
              placeholder="Например, 2"
              type="text"
              className={styles.inputField}
            />
            <div className={styles.unitText}>шт</div>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.inputLabel}>
            <div className={styles.labelText}>Укажите желаемое время</div>
          </div>
          <div className={styles.inputWrapper}>
            <input
              placeholder="Например, через два часа"
              type="text"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className={styles.orderSummary}>
          <div className={styles.summaryContent}>
            <div className={styles.summaryRow}>
              <div className={styles.rowTitle}>Сумма заказа</div>
              <div className={styles.rowValue}>{goodsPrice}₽</div>
            </div>
            {deliveryMethod === "delivery" && (
              <div className={styles.summaryRow}>
                <div className={styles.rowTitle}>Доставка</div>
                <div className={styles.rowValue}>100,00&nbsp;₽</div>
              </div>
            )}
          </div>
          <div className={styles.totalSummary}>
            <div className={styles.totalTitle}>Итого</div>
            <div className={styles.totalValue}>
              {deliveryMethod === "delivery" ? totalPrice : goodsPrice}₽
            </div>
          </div>
        </div>
        <div className={styles.policySection}>
          <span className={styles.policyText}></span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
