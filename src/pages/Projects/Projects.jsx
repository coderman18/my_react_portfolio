import React from 'react'
import styles from './Projects.module.css'

import Project from '../../components/Project/Project'

import { projects } from '../../helpers/projectsList'

export default function Projects() {
  return (
    <div className={styles.projects}>
       <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
              {projects.map((project) => {
                return <Project 
                        title={project.title}
                        img={project.img}
                        skills={project.skills}
                        />;
                      })
              }
            </ul>
        </div>
    </main>
    </div>
  )
}
