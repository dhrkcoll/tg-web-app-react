import { useState, useEffect, useCallback } from "react";
import { useTelegram } from "../../hooks/useTelegram.js";
import styles from "./Form.module.scss";

const Form = () => {
  const { tg } = useTelegram();
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("");

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };

    tg.sendData(JSON.stringify(data));
  }, [country, street, subject]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send data",
    });
  }, {});

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h3>Enter the data</h3>
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type="text"
        placeholder="Street"
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSubject}>
        <option value="legal">legal entity</option>
        <option value="physical">physical entity</option>
      </select>
    </div>
  );
};

export default Form;
