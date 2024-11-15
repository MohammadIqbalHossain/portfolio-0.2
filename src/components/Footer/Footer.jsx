import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
        <h4 className='copyright-text'>© 2023 Ultra by @justinmfarrugia</h4>
        <h3 className='extra-links'>
            <Link to='https://github.com/MohammadIqbalHossain' target='__blank'>Other sites</Link> - 
            <Link to='https://web.facebook.com/iqbal.abdullah.927543/' target='__blank'>Connect me</Link>
        </h3>

        <div className='nav-links'>
        <ul>
          <li>
            <NavLink
              to="/"
              className="nav__link"
              style={({ isActive }) => (isActive ? { color: "blue" } : {})}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav__link"
              style={({ isActive }) => (isActive ? { color: "blue" } : {})}
        
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/article"
              className="nav__link"
              style={({ isActive }) => (isActive ? { color: "blue" } : {})}
              
            >
              Article
            </NavLink>
          </li>
          <li>
              <a className="mail" href="mailto:being.iqbal.hossain@gmail.com?subject=Hello%20Iqbal&body=I%20would%20like%20to%20get%20in%20touch%20with%20you">Contact</a>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer