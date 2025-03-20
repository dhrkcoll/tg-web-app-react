import { useState, useEffect, useCallback } from "react";
import { Map, useYMaps, ZoomControl } from "@pbe/react-yandex-maps";
import styles from "./AddAdressPage.module.scss";
import { useTelegram } from "../../hooks/useTelegram.js";
import { useNavigate } from "react-router-dom";
import { addDeliveryAdress } from "../../store/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTelegramButton } from "../../hooks/useTelegramButton.js";

const CENTER = [52.233035839442266, 57.44059302107728];
const ZOOM = 12;

const AddAdressPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tg, user } = useTelegram();
  const userAvatar = tg.initDataUnsafe?.user?.photo_url;
  const ymaps = useYMaps(["geocode"]);
  const [coordinates, setCoordinates] = useState([]);
  const [adress, setAdress] = useState({
    entrance: "",
    intercomCode: "",
    floor: "",
    apartment: "",
    userComment: "",
  });

  const handleClickMap = (e) => {
    const mapInstance = e.get("target"); // Получаем экземпляр карты
    const centerCoords = mapInstance.getCenter(); // Получаем координаты центра карты
    // console.log("Центр карты:", centerCoords);
    // const coords = e.get("coords");

    if (centerCoords) {
      setCoordinates(centerCoords);

      setTimeout(() => {
        ymaps.geocode(centerCoords).then((result) => {
          const foundedAddress = handleGeoResult(result);

          setAdress(foundedAddress);
        });
      }, 1000); // 1000 миллисекунд = 1 секунду
    }
  };

  function handleGeoResult(result) {
    const firstGeoObject = result.geoObjects.get(0);

    if (firstGeoObject) {
      const properties = firstGeoObject.properties;
      const metaData = properties.get("metaDataProperty").GeocoderMetaData;

      // const location = String(properties.get("description", {}));
      // const route = String(properties.get("name", {}));

      const addressDetails = metaData.Address;
      const formattedAddress = addressDetails.formatted; // Полный адрес
      const country =
        addressDetails.Components.find(
          (component) => component.kind === "country"
        )?.name || ""; // Страна
      const locality =
        addressDetails.Components.find(
          (component) => component.kind === "locality"
        )?.name || ""; // Город
      const street =
        addressDetails.Components.find(
          (component) => component.kind === "street"
        )?.name || ""; // Улица
      const house =
        addressDetails.Components.find(
          (component) => component.kind === "house"
        )?.name || ""; // Номер дома
      const postalCode = addressDetails.postal_code; // Почтовый код

      const foundedAddress = {
        formattedAddress,
        country,
        locality,
        street,
        house,
        postalCode,
      };

      return foundedAddress;
    }
  }
  useTelegramButton("Сохранить", true);
  const onClickMainButton = useCallback(() => {
    dispatch(addDeliveryAdress(adress));
    navigate("/select-deliever");
  }, [dispatch, adress, navigate]);
  useEffect(() => {
    tg.onEvent("mainButtonClicked", onClickMainButton);

    return () => {
      tg.offEvent("mainButtonClicked", onClickMainButton);
    };
  }, [dispatch]);
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
    <section className={styles.addAddressPage}>
      <div className={styles.container}>
        <div className={styles.addressEdit}>
          <div className={styles.body}>
            <div className={styles.content}>
              <div className={styles.map} id="mapMain">
                <img src={userAvatar} alt="User" />
                <Map
                  defaultState={{
                    center: CENTER,
                    zoom: ZOOM,
                  }}
                  style={{ width: "100%", height: "400px" }}
                  onBoundsChange={handleClickMap}
                >
                  <ZoomControl
                    options={{ float: "left" }}
                    className={styles.zoomControl}
                  />
                </Map>
              </div>
              <div className={styles.formContent}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>город, улица и дом</label>
                  <div className={styles.inputWrapper}>
                    <input
                      className={styles.inputValue}
                      placeholder="Зилаир, ул. Ленина 109"
                      value={adress.formattedAddress || ""}
                      onChange={(e) => {
                        setAdress((prev) => {
                          return { ...prev, formattedAddress: e.target.value };
                        });
                      }}
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
                      <input
                        className={styles.inputValue}
                        placeholder=""
                        value={adress.entrance}
                        onChange={(e) => {
                          setAdress((prev) => {
                            return { ...prev, entrance: e.target.value };
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Код домофона</label>
                    <div className={styles.inputWrapper}>
                      <input
                        className={styles.inputValue}
                        placeholder=""
                        value={adress.intercomCode}
                        onChange={(e) => {
                          setAdress((prev) => {
                            return { ...prev, intercomCode: e.target.value };
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Этаж</label>
                    <div className={styles.inputWrapper}>
                      <input
                        className={styles.inputValue}
                        placeholder=""
                        value={adress.floor}
                        onChange={(e) => {
                          setAdress((prev) => {
                            return { ...prev, floor: e.target.value };
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Квартира</label>
                    <div className={styles.inputWrapper}>
                      <input
                        className={styles.inputValue}
                        placeholder=""
                        value={adress.apartment}
                        onChange={(e) => {
                          setAdress((prev) => {
                            return { ...prev, apartment: e.target.value };
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Комментарий</label>
                  <div className={styles.inputWrapper}>
                    <input
                      className={styles.inputValue}
                      onChange={(e) => {
                        setAdress((prev) => {
                          return { ...prev, userComment: e.target.value };
                        });
                      }}
                    />
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
