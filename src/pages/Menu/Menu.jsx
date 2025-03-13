import { useCallback, useEffect } from "react";
import styles from "./Menu.module.scss";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";
import { MdOutlineHomeWork } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const Menu = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();

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
    <div className={styles.menuContainer}>
      <div className={styles.profile}>
        <div className={styles.profileInner}>
          <section className={styles.sectionProfile}>
            <div className={styles.sectionProfileInfo}>
              <div className={styles.avatar}>
                <img src="" alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.userName}></div>
                <div className={styles.userId}></div>
              </div>
            </div>
          </section>
          <div className={styles.menuSection}>
            <div className="menu-content">
              <div className="menu-content-item">
                <AiTwotoneShop />
                <div className="text">
                  <div className="div3">Мои заказы</div>
                  <div className="_18"></div>
                  <div className="icons-16-angle-right">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
              <div className="menu-content-item">
                <MdOutlineAccountBalanceWallet />
                <div className="text">
                  <div className="div3">Баланс</div>
                  <div className="_890">500,00&nbsp;₽</div>
                </div>
              </div>
              <div className="menu-content-item">
                <MdOutlineHomeWork />
                <div className="text2">
                  <div className="div3">Мои адреса</div>
                  <div className="_18"></div>
                  <div className="icons-16-angle-right">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
