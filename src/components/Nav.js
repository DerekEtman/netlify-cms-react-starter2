import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Nav.sass'

export default function Nav({ handlePopupOpen }) {
  const [state] = useState({ active: false, navBarActiveClass: '' })

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="navigation">
      <div className={`navigation-wrap`}>
        <Link to="/" aria-current="page">
          <Logo />
        </Link>

        <div id="navMenu" className={`navbar-menu ${state.navBarActiveClass}`}>
          <nav
            role="navigation"
            className={`navigation-items ${state.navBarActiveClass}`}
          >
            <Link to="/" aria-current="page" className="navigation-item">
              Home
            </Link>
            <Link to="/services" className="navigation-item">
              Services
            </Link>

            <div className="subnav">
              <Link to="/about" className="navigation-item">
                About
              </Link>
              <div className="subnav-content">
                <Link to="/about" className="subnav-item navigation-item">
                  About C-Stop
                </Link>
                <Link
                  to="/about/clients"
                  className="subnav-item navigation-item"
                >
                  Clients
                </Link>
              </div>
            </div>

            <Link to="/contact" className="navigation-item">
              Contact
            </Link>
          </nav>
        </div>

        <Link id="navQuoteButton" to="/quote" className="Button">
          <div className="text-block">Request an Estimate</div>
        </Link>
      </div>

      {/*            */}
      {/* Mobile Nav */}
      {/*            */}

      <Menu
        right
        className="navigation-mobile"
        width={'70%'}
        isOpen={menuOpen}
        pageWrapId={'page-wrap'}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
      >
        <Link
          id="navQuoteButton"
          to="/quote"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Request an Estimate
        </Link>
        <Link
          to="/"
          aria-current="page"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Services
        </Link>

        {/* <div className="subnav"> */}
          <Link
            to="/about"
            className="navigation-item"
            onClick={() => toggleMenu()}
          >
            About
          </Link>

          {/* <div className="subnav-content"> */}
            <Link
              to="/about"
              className="subnav-item navigation-item"
              onClick={() => toggleMenu()}
            >
              About C-Stop
            </Link>
            <Link
              to="/about/clients"
              className="subnav-item navigation-item"
              onClick={() => toggleMenu()}
            >
              Clients
            </Link>
          {/* </div> */}
        {/* </div> */}
        <Link
          to="/contact"
          className="navigation-item"
          onClick={() => toggleMenu()}
        >
          Contact
        </Link>
      </Menu>
    </nav>
  )
}
