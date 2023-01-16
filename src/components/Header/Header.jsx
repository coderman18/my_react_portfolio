import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1 className={styles.header__title}>
                    <strong>Hi, my name is <em>Yuri</em></strong><br/>
                    a frontend developer
                </h1>
                <div className={styles.header__text}>
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className={styles.btn}>Download CV</a>
            </div>
        </header>
    </div>
  )
}
