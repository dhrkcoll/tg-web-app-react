import React from "react";
import styles from "./OrderPage.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { PiCashRegisterLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

const OrderPage = () => {
  return (
    <div className={styles.deliveryModule}>
      <div className={styles.deliveryBody}>
        <div className={styles.deliveryHeader}>Доставка</div>
        <div className={styles.deliveryAddress}>
          <div className={styles.addressContent}>
            <div className={styles.addressText}>
              <p>Россия, Самара, Чапаевская улица</p>
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
                У вас есть 860.00 бонусных рублей, из них вы можете списать
                162.00₽
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
              <div className={styles.phoneNumber}>79659271079</div>
              <div className={styles.phoneEdit}>Указать</div>
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
              placeholder="Например, завтра в 15:00"
              type="text"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className={styles.orderSummary}>
          <div className={styles.summaryContent}>
            <div className={styles.summaryRow}>
              <div className={styles.rowTitle}>Сумма заказа</div>
              <div className={styles.rowValue}>1&nbsp;620,00&nbsp;₽</div>
            </div>
            <div className={styles.summaryRow}>
              <div className={styles.rowTitle}>Доставка</div>
              <div className={styles.rowValue}>100,00&nbsp;₽</div>
            </div>
          </div>
          <div className={styles.totalSummary}>
            <div className={styles.totalTitle}>Итого</div>
            <div className={styles.totalValue}>2&nbsp;020,00&nbsp;₽</div>
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
