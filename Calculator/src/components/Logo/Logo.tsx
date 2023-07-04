import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/img/Logo.svg'
import styles from './style.module.scss'

const LogoComponent = () => {
  return (
    <div className={styles.logoWrapper}>
        <LogoSvg />
    </div>
  );
};


export const Logo = React.memo(LogoComponent)