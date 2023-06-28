import React from "react";

type InputNumberType = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

export const InputNumber: React.FunctionComponent<InputNumberType> = ({
  value,
  label,
  icon,
}) => {
  return <div>InputNumber</div>;
};
