import styles from "./Button.module.scss";

const Button = ({ title, type, disable, onClick }) => {
  const buttonClass = `${styles.btn} ${type === "add" ? styles.add : ""} ${
    type === "plus" ? styles.plus : ""
  } ${type === "minus" ? styles.minus : ""}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disable}>
      {title}
    </button>
  );
};

export default Button;
