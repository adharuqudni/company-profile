import styles from './styles.module.css'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import moment from 'moment';

export default function IntroCard(props) {
    const { title, subtitle, children } = props;

    return (
        <div className={styles.container} {...props}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            {children}
        </div>
    )
}
