import React from "react";
import styles from "./Button.module.css";

function Button({ children, onClick = () => {}, styling }) {
  return (
    <button
      className={`${styles.generalCommonStyle} ${styles[styling]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
