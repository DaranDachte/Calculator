import { useMemo, useState } from "react";
import { InputNumber } from "../InputNumber/InputNumber";
import { TipButton } from "../TipButton/TipButton";
import { GreenDisplay } from "../GreenDisplay/GreenDisplay";
import { ReactComponent as DollarIcon } from '../../assets/img/DollarImg.svg'
import { ReactComponent as PeopleIcon } from '../../assets/img/PeopleImg.svg'
import styles from './style.module.scss'

const tipsPercents: number[] = [5, 10, 15, 25, 50];

export const Wrapper = () => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [tip, setTip] = useState<number>(5);


  const count: {total: string, personTip: string} = useMemo(() => {
    const totalCounter = Math.round(bill + (tip / 100) * bill) / people;
    const personTip = Math.round((tip / 100) * totalCounter);

    return {
      total: totalCounter.toFixed(2),
      personTip: personTip.toFixed(2)
    }
  }, [bill, people, tip])

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_section}>
        <InputNumber
          title={"Bill"}
          value={bill}
          OnSubmit={(value: number) => setBill(value)}
          icon={<DollarIcon />}
        />
        <div className={styles.tipsPanel}>
          <p>Select Tip %</p>
          <div className={styles.tipsPanel_buttons}>
            {tipsPercents.map((value) => (
                <TipButton
                    key={`tip-${value}`}
                    value={value}
                    onClick={(value: number) => setTip(value)}
                    active={tip === value}
                />
            ))}
          </div>
        </div>
        <InputNumber
          title={"Number of People"}
          value={people}
          OnSubmit={(value: number) => setPeople(value)}
          icon={<PeopleIcon />}
        />
      </div>
      <GreenDisplay count={count} />
    </div>
  );
};
