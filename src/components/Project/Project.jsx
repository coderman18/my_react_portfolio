import React from 'react'
import styles from './Project.module.css'

// import project01 from '../../img/projects/01.jpg'

export default function Project({img, title, skills, index}) {
  return (
      <li className="project">
        <a href="./project-page.html">
            <img 
              key={index}
              src={img} 
              alt={title} 
              skills={skills}
              className={styles.project__img}
            />

          <h3 className={styles.project__title}>{title}</h3>
        </a>
      </li>
  )
}
