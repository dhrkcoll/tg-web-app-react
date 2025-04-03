import styles from "./Button.module.scss";

const Button = ({
  children,
  title,
  type = "button",
  disabled = false,
  onClick,
  style,
  className = "",
  isLoading = false,
  icon,
  ...props
}) => {
  const buttonClass = `${styles.btn} ${className} ${
    isLoading ? styles.loading : ""
  }`;

  return (
    <button
      style={style}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title || children}
    </button>
  );
};

export default Button;
