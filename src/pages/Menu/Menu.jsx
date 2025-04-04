import { useCallback, useEffect } from "react";
import styles from "./Menu.module.scss";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineHomeWork } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import useBackButton from "../../hooks/useTelegramBackButton";

const Menu = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();

  useBackButton();

  return (
    <div className={styles.menuContainer}>
      <div className={styles.profile}>
        <div className={styles.profileInner}>
          <section className={styles.sectionProfile}>
            <div className={styles.sectionProfileInfo}>
              <div className={styles.avatar}>
                <img
                  src={tg.initDataUnsafe?.user?.photo_url}
                  alt="Telegram acc photo"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.userName}>
                  {tg.initDataUnsafe?.user?.username}
                </div>
                <div className={styles.userId}>
                  ID {tg.initDataUnsafe?.user?.id}
                </div>
              </div>
            </div>
          </section>
          <div className={styles.menuSection}>
            <div className={styles.menuContent}>
              <Link to={"/orders"} className={styles.menuContentItem}>
                <AiTwotoneShop />
                <div className={styles.menuContentItemInner}>
                  <div className={styles.menuContentText}>Мои заказы</div>
                  <div className={styles.menuContentRight}>
                    <FaAngleRight />
                  </div>
                </div>
              </Link>
              <div className={styles.menuContentItem}>
                <MdOutlineAccountBalanceWallet />
                <div className={styles.menuContentItemInner}>
                  <div className={styles.menuContentText}>Баланс</div>
                  <div className="_890">500,00&nbsp;₽</div>
                </div>
              </div>
              <Link to={"/select-deliever"} className={styles.menuContentItem}>
                <MdOutlineHomeWork />
                <div className={styles.menuContentItemInner}>
                  <div className={styles.menuContentText}>Мои адреса</div>
                  <div className={styles.menuContentRight}>
                    <FaAngleRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.menuSection}>
            <div className={styles.menuContent}>
              <div className={styles.menuContentItem}>
                <div className={styles.menuContentItemInner}>
                  <div className={styles.menuContentText}>Режим работы</div>
                </div>
              </div>
              <div className={styles.menuContentItem}>
                <div className={styles.menuContentItemInner}>
                  <div className={styles.menuContentText}>
                    Согласие на обработку
                  </div>
                </div>
              </div>
              <div className={styles.menuContentItem}>
                <div className={styles.menuContentItemInner}>
                  <div className={styles.menuContentText}>
                    Политика обработки данных
                  </div>
                </div>
              </div>
              <div className={styles.menuContentItem}>
                <div className={styles.menuContentItemInner}>
                  <div className={styles.menuContentText}>
                    Пользовательское соглашение
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
