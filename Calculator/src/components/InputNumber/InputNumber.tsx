import React, { FormEvent } from "react";

import "./InputNumber.style.css";
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
    <label className="inputNumber">
      <span>{title}</span>
      <div className="inputNumber_wrapper">
        {icon}
        <input type="number" value={value.toString()} onInput={SubmitHandler} />
      </div>
    </label>
  );
};
