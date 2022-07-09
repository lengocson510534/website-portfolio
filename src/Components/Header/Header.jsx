import React from 'react'
import AddProject from '../AddProject/AddProject'

const Header = () => {
  return (
    <>
      <header className='header'>
        <h2 className='header__logo'>SonDev</h2>
        <ul className="header__menu">
          <li className="header__menu__item">Home</li>
          <li className="header__menu__item">About</li>
          <li className="header__menu__item">Project</li>
        </ul>
        <AddProject />
      </header>
    </>
  )
}

export default Header