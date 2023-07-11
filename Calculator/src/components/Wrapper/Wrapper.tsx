import { useState, useMemo } from "react";
import "./Wrapper.style.css";
import { InputNumber } from "../InputNumber/InputNumber";
import { TipButton } from "../TipButton/TipButton";
import { GreenDisplay } from "../GreenDisplay/GreenDisplay";
import { CustomInput } from "../CustomInput/CustomInput";

import { ReactComponent as DollarIcon } from "../../assets/img/DollarImg.svg";
import { ReactComponent as PeopleIcon } from "../../assets/img/PeopleImg.svg";

const TipArray: number[] = [5, 10, 15, 25, 50];

export const Wrapper = () => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [tip, setTip] = useState<number>(5);
  const [useCustom, setUseCustom] = useState<boolean>(false);

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
    setUseCustom(false);
    setTip(5);
  };

  const customHandler = (value: number) => {
    if (value < 1) return false;

    if (useCustom === false) setUseCustom(true);
    setTip(value);
  };

  return (
    <div className="wrapper">
      <div className="inputBillNumber">
        <InputNumber
          title={"Bill"}
          value={bill}
          OnSubmit={(value: number) => setBill(value)}
          icon={<DollarIcon />}
        />
        <div>
          <p className="pClass">Select Tip %</p>
          <div className="tipAndCustom">
            {TipArray.map((item, index) => (
              <TipButton
                key={index}
                value={item}
                onClick={(value: number) => setTip(value)}
                active={tip === item}
              />
            ))}

            <CustomInput
              value={useCustom ? tip : null}
              OnInput={(value) => customHandler(value)}
            />
          </div>
        </div>

        <InputNumber
          title={"Number of People"}
          value={people}
          OnSubmit={(value: number) => setPeople(value)}
          icon={<PeopleIcon />}
          showError={true}
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
