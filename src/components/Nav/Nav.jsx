import React from 'react'
import styles from './Nav.module.css'

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";

export default function Nav() {
  return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navRow}>
                    <a href="./index.html" className={styles.logo}><strong>Freelancer</strong> portfolio</a>

                    <button className={styles.darkModeBtn}>
                        <img src={moon} alt="Light mode" className={styles.darkModeBtn__icon}/>
                        <img src={sun} alt="Dark mode" className={styles.darkModeBtn__icon}/>
                    </button>

                    <ul className={styles.navList}>
                        <li className={styles.navList__item}><a href="./index.html" className={styles.navList__link}>Home</a></li>
                        <li className={styles.navList__item}><a href="./projects.html" className={styles.navList__link}>Projects</a></li>
                        <li className={styles.navList__item}><a href="./contacts.html" className={styles.navList__link}>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
