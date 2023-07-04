import React from 'react';
import styles from './style.module.scss'

type Props = {
    title: string
    subtitle?: string
    value: string
}

export const ValueViewer: React.FunctionComponent<Props> = ({title, value, subtitle = 'person'}) => {
    return <dl className={styles.valueViewer}>
        <dt>
            <span>{title}</span>
            <sub>/ {subtitle}</sub>
        </dt>
        <dd>${value}</dd>
    </dl>
};