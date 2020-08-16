import React from "react";
import styles from "./formsControl.module.css";

export const FormControl = ({ input, meta, el, ...props }: any) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {React.createElement(el, { ...input, ...props })}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
