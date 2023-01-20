import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";

export default function Nav() {

  const activeLink = 'navList__link navList__link--active'
  const normalLink = 'navList__link'

  return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navRow}>
                  <NavLink to="/" className={styles.logo}>
                    <strong>Freelancer</strong> portfolio
                  </NavLink>
                   

                    <button className={styles.darkModeBtn}>
                        <img src={moon} alt="Light mode" className={styles.darkModeBtn__icon}/>
                        <img src={sun} alt="Dark mode" className={styles.darkModeBtn__icon}/>
                    </button>

                    <ul className={styles.navList}>
                      <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
                      <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink>
                      <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink>   
                    </ul>
                </div>
            </div>
        </nav>
  )
}
