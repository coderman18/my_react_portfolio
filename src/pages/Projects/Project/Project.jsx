import React from 'react'
import GitHubBtn from '../../../components/GitHubBtn/GitHubBtn'

import img from './../../../img/projects/02-big.jpg'


export default function Project() {
  return (
    <div>
       <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={img} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

              <GitHubBtn />
                

            </div>
        </div>
    </main>
    </div>
  )
}
