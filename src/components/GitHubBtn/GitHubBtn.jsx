import React from 'react'
import githubIcon from '../../img/icons/gitHub-black.svg'

export default function GitHubBtn() {
  return (
    <div>
      <a href="#!" className="btn-outline">
                    <img src={githubIcon} alt=""/>
                    GitHub repo
                </a>
    </div>
  )
}
