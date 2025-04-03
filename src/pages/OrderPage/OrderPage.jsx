import { useEffect, useState, useCallback } from "react";
import styles from "./OrderPage.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { PiCashRegisterLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useTelegram } from "../../hooks/useTelegram.js";
import { Link, useNavigate } from "react-router-dom";
import { useTelegramButton } from "../../hooks/useTelegramButton.js";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tg } = useTelegram();

  const goodsPrice = useSelector((state) => state.cart.totalPrice);
  const delieverPrice = 100;
  const totalPrice = goodsPrice + delieverPrice;
  const deliveryMethod = useSelector((state) => state.location.deliveryMethod);
  const selectedAddress = useSelector(
    (state) => state.location.selectedAddress
  );
  const [userPhone, setUserPhone] = useState("");
  const paymentMethod = useSelector((state) => state.payment.paymentMethod);
  const selectCity = useSelector((state) => state.location.selectedCity);

  const [isBonus, setIsBonus] = useState(false);

  const handleRequestPhone = () => {
    tg.HapticFeedback.selectionChanged();
    tg.requestContact((status, event) => {
      if (status) {
        console.log(event);
        const phone = event?.responseUnsafe?.contact?.phone_number || null;
        setUserPhone(phone);
      }
    });
  };

  const createInvoice = (orderData) => {};

  const handleSubmitOrder = () => {
    const orderData = {
      userId: "1",
      items: [],
      comment: "",
    };

    dispatch(setOrderDetails(orderData));
    createInvoice(orderData);
  };

  useTelegramButton("ОФОРМИТЬ ЗАКАЗ", true);
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
    <div className={styles.deliveryModule}>
      <div className={styles.deliveryBody}>
        <div className={styles.deliveryHeader}>
          {deliveryMethod === "delivery" ? "Доставка" : "Самовывоз"}
        </div>
        <div className={styles.deliveryAddress}>
          <div className={styles.addressContent}>
            <div className={styles.addressText}>
              <p>
                {deliveryMethod === "dilivery"
                  ? selectedAddress?.locality
                  : selectCity.name}{" "}
                {deliveryMethod === "dilivery"
                  ? `${selectedAddress?.formattedAddress}`
                  : `${selectedAddress?.street}, ${selectedAddress?.house}`}
              </p>
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
              <Link to={"/payment-method"} className={styles.paymentContent}>
                <div className={styles.paymentText}>{paymentMethod.name}</div>
                <div className={styles.paymentArrow}>
                  <FaAngleRight />
                </div>
              </Link>
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
              <div
                className={styles.paymentContent}
                onClick={() => setIsBonus((prev) => !prev)}
              >
                <div className={styles.paymentText}>Списать бонусы</div>
                <div
                  className={`${styles.bonusSwitch} ${
                    isBonus ? styles.bonusSwitchActive : ""
                  }`}
                >
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
              <div className={styles.phoneEdit} onClick={handleRequestPhone}>
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
