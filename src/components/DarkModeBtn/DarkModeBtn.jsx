import React from 'react'
import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'

import sun from "./sun.svg"
import moon from "./moon.svg"

import './style.css'

export default function DarkModeBtn() {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light')


  const btnRef = useRef(null)

    useEffect(() => {
      if (darkMode === 'dark') {
        document.body.classList.add('dark')
        btnRef.current.classList.add('darkModeBtn--active')
      } else {
        document.body.classList.remove('dark')
        btnRef.current.classList.remove('darkModeBtn--active')

      }
    }, [darkMode]);
  

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <div>
      <button ref={btnRef} className='darkModeBtn' onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className='darkModeBtn__icon'/>
        <img src={moon} alt="Dark mode" className='darkModeBtn__icon'/>
      </button>
    </div>
  )

}
