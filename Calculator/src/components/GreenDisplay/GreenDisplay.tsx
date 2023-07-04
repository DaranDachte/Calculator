import React from "react";
import { ValueViewer } from "./ValueViewer.tsx";
import styles from './style.module.scss'

type Props = {
  count: {
    total: string
    personTip: string
  }
}

export const GreenDisplay: React.FunctionComponent<Props> = ({count}) => {
  return <div className={styles.greenDisplay}>
    <div className={styles.greenDisplay_viewers}>
      <ValueViewer title={'Tip Amount'} value={count.personTip} />
      <ValueViewer title={'Total'} value={count.total} />
    </div>
    <button type={'reset'}>Reset</button>
  </div>;
};
