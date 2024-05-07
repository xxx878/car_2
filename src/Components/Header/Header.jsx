import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isActive, setIsActive] = useState(false)

  const MenuActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='header'>
      <div className="container">
        <a href="#" className='logo'>Logo</a>
        <nav className="header_nav">
            <a href="#" className="header_link">Home</a>
            <a href="#" className="header_link">About</a>
            <a href="#" className="header_link">Container</a>
        </nav>


        <div className='burger-menu'>
            <nav className="header_nav-mobile">
              <p className={`burber-btn`} onClick={MenuActive}>dfgerf</p>
              <div className={`burger_item ${isActive ? 'active' : ''}`}>
                <div className="header_link">
                    <a href="#" className="header_link-item">Home</a>
                    <a href="#" className="header_link-item">About</a>
                    <a href="#" className="header_link-item">Container</a>
                </div>
              </div>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
