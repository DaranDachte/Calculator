import React from "react";
import "./GreenDisplay.style.css";
import DisplayWiever from "./DisplayWiever";
type Props = {
  totalCounter: string;
  personTipCounter: string;
  onReset: () => void;
};

export const GreenDisplay: React.FunctionComponent<Props> = ({
  onReset,
  totalCounter,
  personTipCounter,
}) => {
  return (
    <div className="greenDisplay">
      <div>
        <DisplayWiever title={"Tip Amount"} value={personTipCounter} />
        <DisplayWiever title={"Total"} value={totalCounter} />
      </div>
      <button className="buttonReset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};
