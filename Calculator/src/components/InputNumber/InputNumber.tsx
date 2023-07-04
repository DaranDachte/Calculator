import React from "react";
import styles from './style.module.scss'

type InputNumberType = {
  value: number;
  title: string;
  icon: React.ReactNode;
  OnSubmit: (value: number) => void;
};

export const InputNumber: React.FunctionComponent<InputNumberType> = ({
  value,
  title,
  icon,
  OnSubmit,
}) => {
  const SubmitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    OnSubmit(Number(e.target.value));
  };

  return (
    <label className={styles.inputNumber}>
      <span>{title}</span>
      <div className={styles.inputNumber_wrapper}>
        {icon}
        <input type="number" value={value.toString()} onInput={SubmitHandler} />
      </div>
    </label>
  );
};
