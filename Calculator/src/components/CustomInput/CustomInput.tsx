import React from "react";
import "./CustomInput.style.css";

type Props = {
  value: number | null;
  placeholder?: string;
  OnInput: (value: number) => void;
};

export const CustomInput: React.FunctionComponent<Props> = ({
  value,
  placeholder = "Custom",
  OnInput,
}) => {
  const SubmitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    OnInput(Number(e.target.value));
  };
  return (
    <label>
      <input
        className="customInput"
        type="number"
        value={value ? value.toString() : ""}
        placeholder={placeholder}
        onInput={SubmitHandler}
      />
    </label>
  );
};
