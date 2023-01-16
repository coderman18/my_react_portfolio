import React from 'react'
import styles from './Footer.module.css'

// import githubBlack from "../../img/icons/gitHub-black.svg";
import github from "../../img/icons/gitHub.svg";
import instagram from "../../img/icons/instagram.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import twitter from "../../img/icons/twitter.svg";
import vk from "../../img/icons/vk.svg";

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className="container">
            <div className={styles.footer__wrapper}>
                <ul className={styles.social}>
                    <li className={styles.social__item}><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className={styles.social__item}><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li className={styles.social__item}><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className={styles.social__item}><a href="#!"><img src={github} alt="Link"/></a></li>
                    <li className={styles.social__item}><a href="#!"><img src={linkedin} alt="Link"/></a></li>
                </ul>
                <div className={styles.copyright}>
                    <p>All Rights Reserved 2023 | @freecode</p>
                </div>
            </div>
        </div>
      </footer>
  )
}
