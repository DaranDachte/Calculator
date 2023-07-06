import React, { useState, useMemo } from "react";
import "./Wrapper.style.css";
import { InputNumber } from "../InputNumber/InputNumber";
import { TipButton } from "../TipButton/TipButton";
import { GreenDisplay } from "../GreenDisplay/GreenDisplay";

import { ReactComponent as DollarIcon } from "../../assets/img/DollarImg.svg";
import { ReactComponent as PeopleIcon } from "../../assets/img/PeopleImg.svg";

const TipArray: number[] = [5, 10, 15, 25, 50];

export const Wrapper = () => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [tip, setTip] = useState<number>(5);

  const { totalCounter, personTipCounter } = useMemo(() => {
    const totalCounter = Math.round(bill + (tip / 100) * bill) / people;
    const personTipCounter = (tip / 100) * totalCounter;
    return {
      totalCounter: totalCounter.toFixed(2),
      personTipCounter: personTipCounter.toFixed(2),
    };
  }, [bill, tip, people]);

  const onReset = () => {
    setBill(0);
    setPeople(1);
  };

  console.clear();
  console.log("Bill", bill);
  console.log("People", people);
  console.log("Tip", tip);
  console.log("Counter", totalCounter);
  console.log("PersonTipCounter", personTipCounter);
  return (
    <div className="wrapper">
      <div>
        <InputNumber
          title={"Bill"}
          value={bill}
          OnSubmit={(value: number) => setBill(value)}
          icon={<DollarIcon />}
        />
        <div>
          <p>Select Tip %</p>

          {TipArray.map((item, index) => (
            <TipButton
              key={index}
              value={item}
              onClick={(value: number) => setTip(value)}
              active={tip === item}
            />
          ))}
        </div>
        <InputNumber
          title={"Number of People"}
          value={people}
          OnSubmit={(value: number) => setPeople(value)}
          icon={<PeopleIcon />}
        />
      </div>
      <GreenDisplay
        onReset={onReset}
        totalCounter={totalCounter}
        personTipCounter={personTipCounter}
      />
    </div>
  );
};
