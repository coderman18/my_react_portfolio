import React from 'react'
import { NavLink } from 'react-router-dom';
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn';
import styles from './Nav.module.css'



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
                    <ul className={styles.navList}>
                      <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
                      <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink>
                      <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink>   
                    </ul>
                  <DarkModeBtn />
                </div>
            </div>
        </nav>
  )
}
