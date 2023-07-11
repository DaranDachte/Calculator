import React from "react";
import "./GreenDisplay.style.css";
import DisplayWiever from "./DisplayWiever";
type Props = {
  totalCounter: string;
  personTipCounter: string;
  onReset: () => void;
  active?: boolean;
};

export const GreenDisplay: React.FunctionComponent<Props> = ({
  onReset,
  totalCounter,
  personTipCounter,
}) => {
  const classNames = ["buttonReset"];

  return (
    <div className="greenDisplay">
      <div>
        <div className="tipAmount">
          <DisplayWiever title={"Tip Amount"} value={personTipCounter} />
        </div>
        <div>
          <DisplayWiever title={"Total"} value={totalCounter} />
        </div>
      </div>
      <button className={classNames.join(" ")} onClick={onReset}>
        RESET
      </button>
    </div>
  );
};
