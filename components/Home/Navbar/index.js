import styles from './styles.module.css'
import Image from 'next/image'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

 return (
  <>
    <div className={styles.navbar}>
        <Image src='/assets/color-company.png' alt="company-logo" width={160} height={31}></Image>
        <MenuIcon/>
    </div>
    </>
  )
}
