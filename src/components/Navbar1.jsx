import { useState } from "react";
import "../components/Navbar1.scss";
import { NavLink } from "react-router-dom";

export default function Navbar1() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Iqbal Hossain
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink 
               to='/'
               className='nav__link'
               style={({isActive}) => isActive ? {color: 'blue'} : {}}
               onClick={() => setIsNavExpanded(false)}>
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to='/about'
              className='nav__link'
              style={({isActive}) => isActive ? {color: 'blue'} : {}}
              onClick={() => setIsNavExpanded(false)}>
            About
            </NavLink>
          </li>
          <li>
          <NavLink
              to='/article'
              className='nav__link'
              style={({isActive}) => isActive ? {color: 'blue'} : {}}
              onClick={() => setIsNavExpanded(false)}>
            Article
            </NavLink>
          </li>
          <li>
          <NavLink 
            to='/Contact' 
            className='nav__link'
            style={({isActive}) => isActive ? {color: 'blue'} : {}}
            onClick={() => setIsNavExpanded(false)}>
              Contact
          </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
