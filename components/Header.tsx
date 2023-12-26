import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
const Header = () => {
  return (
    <header className="header" data-header>
    <div className="container">

      <a href="#" className="logo">
        <Image src="/logo.svg" width="162" height="50" alt="EduWeb logo"/>
      </a>

      <nav className="navbar" data-navbar>

        <div className="wrapper">
          <a href="#" className="logo">
            <Image src="/logo.svg" width="162" height="50" alt="EduWeb logo"/>
          </a>

          <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <RxCross2/>
          </button>
        </div>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>Home</a>
          </li>

          <li className="navbar-item">
            <a href="#about" className="navbar-link" data-nav-link>About</a>
          </li>

          <li className="navbar-item">
            <a href="#courses" className="navbar-link" data-nav-link>Courses</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

      </nav>

      <div className="header-actions">
        <a href="#" className="btn has-before">
          <span className="span">Login/Register</span>

          <FaArrowRight />
        </a>

        <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
          <MdMenu />
        </button>

      </div>

      <div className="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>
  )
}

export default Header