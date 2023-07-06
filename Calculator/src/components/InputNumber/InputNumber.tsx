import React, { FormEvent } from "react";

import "./InputNumber.style.css";
type InputNumberType = {
  value: number;
  title: string;
  icon: React.ReactNode;
  OnSubmit: (value: number) => void;
  showError?: boolean;
};

export const InputNumber: React.FunctionComponent<InputNumberType> = ({
  value,
  title,
  icon,
  OnSubmit,
  showError = false,
}) => {
  const SubmitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    OnSubmit(Number(e.target.value));
  };

  return (
    <label className="inputNumber">
      <span>{title}</span>
      {showError && value === 0 && <small className="zero">Cant be Zero</small>}
      <div className="inputNumber_wrapper">
        {icon}
        <input type="number" value={value.toString()} onInput={SubmitHandler} />
      </div>
    </label>
  );
};
