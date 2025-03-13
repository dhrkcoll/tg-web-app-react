import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
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
          <div data-v-14aa940a="" class="section-menu">
            <div data-v-14aa940a="" class="menu-content">
              <div data-v-14aa940a="" class="menu-content-item">
                <img
                  data-v-14aa940a=""
                  class="icons-30-orders"
                  src="/img/icons-30-orders0.1ad6293d.svg"
                />
                <div data-v-14aa940a="" class="text">
                  <div data-v-14aa940a="" class="div3">
                    Мои заказы
                  </div>
                  <div data-v-14aa940a="" class="_18"></div>
                  <div data-v-14aa940a="" class="icons-16-angle-right">
                    <img
                      data-v-14aa940a=""
                      class="group-12"
                      src="/img/group-11.9d48cbdd.svg"
                    />
                  </div>
                </div>
              </div>
              <div data-v-14aa940a="" class="menu-content-item">
                <img
                  data-v-14aa940a=""
                  class="icons-30-wallet"
                  src="/img/icons-30-wallet0.0e6c8f60.svg"
                />
                <div data-v-14aa940a="" class="text">
                  <div data-v-14aa940a="" class="div3">
                    Баланс
                  </div>
                  <div data-v-14aa940a="" class="_890">
                    500,00&nbsp;₽
                  </div>
                </div>
              </div>
              <div data-v-14aa940a="" class="menu-content-item">
                <img
                  data-v-14aa940a=""
                  class="icons-30-map"
                  src="/img/icons-30-map0.f4d6ba2b.svg"
                />
                <div data-v-14aa940a="" class="text2">
                  <div data-v-14aa940a="" class="div3">
                    Мои адреса
                  </div>
                  <div data-v-14aa940a="" class="_18"></div>
                  <div data-v-14aa940a="" class="icons-16-angle-right">
                    <img
                      data-v-14aa940a=""
                      class="group-14"
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
