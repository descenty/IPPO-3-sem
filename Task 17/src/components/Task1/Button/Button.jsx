import styles from "./Button.module.css";
import Loader from "./Loader/Loader";

export const buttonType = {
  DEFAULT: "",
  PRIMARY: styles.primary,
  TEXT: styles.text,
  LINK: styles.link,
};

export const buttonState = {
  DEFAULT: "",
  DISABLED: styles.disabled,
  LOADING: styles.loading,
};

const Button = ({ type, state, children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ""} ${
        styles.button
      } ${type} ${state}`}
    >
      <Loader blue={type !== buttonType.PRIMARY} show={state === buttonState.LOADING} />
      {children}
    </button>
  );
};

export default Button;
