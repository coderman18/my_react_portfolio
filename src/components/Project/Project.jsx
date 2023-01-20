import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Project.module.css'


export default function Project({img, title, skills, index}) {
  return (
      <NavLink to={`/project/${index}`}>
        <li className="project">
            <img 
              key={index}
              src={img} 
              alt={title} 
              skills={skills}
              className={styles.project__img}
            />

          <h3 className={styles.project__title}>{title}</h3>
      </li>
      </NavLink>
  )
}
