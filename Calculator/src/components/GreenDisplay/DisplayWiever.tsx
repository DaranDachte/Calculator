import React from "react";

type Props = {
  title: string;
  value: string;
};

const DisplayWiever: React.FunctionComponent<Props> = ({ title, value }) => {
  return (
    <div className="displayWiever">
      <div className="displayWiever_title">{title}</div>
      <div className="displayWiever_value">{value}</div>
    </div>
  );
};

export default DisplayWiever;
