import styles from './styles.module.css'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import moment from 'moment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Footer() {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.backgroundContainer}>
                <div className={styles.flexRow}>
                    <div className={styles.card}>
                        <h2>TECHNOLOGY DEPARTEMENT</h2>
                        <p >
                            Jl. Lembong No 8 <br />
                            Kel. Braga Kec. Sumur <br />
                            Bandung, Kota Bandung, Jawa Barat
                        </p>
                    </div>
                    <div className={styles.groupText}>
                        <p>Who We Are</p>
                        <p>Our Values</p>
                        <p>The Perks</p>
                    </div>

                </div>
                <div className={styles.triangle1}></div>
                <div className={styles.triangle2}></div>
            </div>
        </div>
    )
}
