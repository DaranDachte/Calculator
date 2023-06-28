import React from "react";
import "./Wrapper.style.css";
import { InputNumber } from "../InputNumber/InputNumber";
import { TipButton } from "../TipButton/TipButton";
import { GreenDisplay } from "../GreenDisplay/GreenDisplay";

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <div>
        <InputNumber />
        <div>
          <p>Select Tip</p>
          <TipButton />
          <TipButton />
          <TipButton />
          <TipButton />
          <TipButton />
        </div>
        <InputNumber />
      </div>
      <GreenDisplay />
    </div>
  );
};
