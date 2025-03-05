import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <Button onClick={onClose}>Close</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;
