import { useCallback, useEffect } from "react";
import styles from "./Menu.module.scss";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";

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
                <img
                  className="icons-30-orders"
                  src="/img/icons-30-orders0.1ad6293d.svg"
                />
                <div className="text">
                  <div className="div3">Мои заказы</div>
                  <div className="_18"></div>
                  <div className="icons-16-angle-right">
                    <img
                      className="group-12"
                      src="/img/group-11.9d48cbdd.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="menu-content-item">
                <img
                  className="icons-30-wallet"
                  src="/img/icons-30-wallet0.0e6c8f60.svg"
                />
                <div className="text">
                  <div className="div3">Баланс</div>
                  <div className="_890">500,00&nbsp;₽</div>
                </div>
              </div>
              <div className="menu-content-item">
                <img
                  className="icons-30-map"
                  src="/img/icons-30-map0.f4d6ba2b.svg"
                />
                <div className="text2">
                  <div className="div3">Мои адреса</div>
                  <div className="_18"></div>
                  <div className="icons-16-angle-right">
                    <img
                      className="group-14"
                      src="/img/group-13.9d48cbdd.svg"
                    />
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
