import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram.js";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={styles.header}>
      <Button onClick={onClose}>Close</Button>
      <span className={styles.username}>{user?.username}</span>
    </div>
  );
};

export default Header;
