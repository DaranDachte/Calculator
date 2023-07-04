import React from "react";
import styles from './styles.module.scss'

type TipButtonType = {
  value: number;
  onClick: (value: number) => void;
  active: boolean;
};

const TipButtonComponent: React.FunctionComponent<TipButtonType> = ({
  value,
  onClick,
  active,
}) => {

  const classNames = [styles.tipButton];
  if (active) {
    classNames.push(styles.tipButton_active);
  }
  return (
    <button className={classNames.join(" ")} onClick={() => onClick(value)}>
      {value} %
    </button>
  );
};

export const TipButton = React.memo(TipButtonComponent)