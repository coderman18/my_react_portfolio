import React from 'react'
import styles from './Project.module.css'

import project01 from '../../img/projects/01.jpg'

export default function Project({img, title, skills}) {
  return (
      <li className="project">
        <a href="./project-page.html">
            <img 
              src={img} 
              alt={title} 
              className={styles.project__img}
            />

          <h3 className={styles.project__title}>{title}</h3>
        </a>
      </li>
  )
}
