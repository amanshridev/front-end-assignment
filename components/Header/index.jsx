import React from 'react';

import './index.scss'

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
          <h1 className='logo-text'>My Portfolio</h1>
        </div>
        <nav className='nav-bar'>
            <ul className='nav-list'>
                <li className='nav-item'><a href="#">Home</a></li>
                <li className='nav-item'><a href="#">About</a></li>
                <li className='nav-item'><a href="#">Services</a></li>
                <li className='nav-item'><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header