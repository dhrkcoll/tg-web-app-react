import { useState } from "react";

import { Map, useYMaps } from "@pbe/react-yandex-maps";
import styles from "./AddAdressPage.module.scss";
import config from "../../../config/config.json";
import { useTelegram } from "../../hooks/useTelegram.js";
const CENTER = [52.233035839442266, 57.44059302107728];
const ZOOM = 12;

const AddAdressPage = () => {
  const { tg, user } = useTelegram();
  const ymaps = useYMaps(["geocode"]);
  const [coordinates, setCoordinates] = useState(null);

  const handleClickMap = (e) => {
    const coords = e.get("coords");

    if (coords) {
      setCoordinates(coords);
    }

    ymaps.geocode(coords).then((result) => {
      console.log(handleGeoResult(result));
    });

    function handleGeoResult(result) {
      const firstGeoObject = result.geoObjects.get(0);

      if (firstGeoObject) {
        const properties = firstGeoObject.properties;

        const location = String(properties.get("description", {}));
        const route = String(properties.get("name", {}));

        const foundedAdress = {
          location,
          route,
        };

        return foundedAdress;
      }
    }
  };
  return (
    <section className={styles.addAddressPage}>
      <div className={styles.container}>
        <div className={styles.addressEdit}>
          <div className={styles.body}>
            <div className={styles.content}>
              <div className={styles.map} id="mapMain">
                <Map
                  defaultState={{
                    center: CENTER,
                    zoom: ZOOM,
                  }}
                  style={{ width: "100%", height: "400px" }}
                  onClick={(e) => handleClickMap(e)}
                />
              </div>
              <div className={styles.formContent}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>город, улица и дом</label>
                  <div className={styles.inputWrapper}>
                    <input
                      className={styles.inputValue}
                      placeholder="Москва, ул. Ленина 15"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6" />
                    </svg>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Подъезд</label>
                    <div className={styles.inputWrapper}>
                      <input className={styles.inputValue} placeholder="" />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Код домофона</label>
                    <div className={styles.inputWrapper}>
                      <input className={styles.inputValue} placeholder="" />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Этаж</label>
                    <div className={styles.inputWrapper}>
                      <input className={styles.inputValue} placeholder="" />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Квартира</label>
                    <div className={styles.inputWrapper}>
                      <input className={styles.inputValue} placeholder="" />
                    </div>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Комментарий</label>
                  <div className={styles.inputWrapper}>
                    <input className={styles.inputValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAdressPage;
