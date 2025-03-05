import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return <button {...props} className={"button" + props.className}></button>;
};

export default Button;
