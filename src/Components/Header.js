import React from 'react';
import "./css/Header.css"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-main">
          <div className="header-logo">
            <a href="index.html"><span>flower</span>shop</a>
          </div>
          <nav className="header-menu js-header-menu">
            <ul className="menu">
              <Link to="/">
              <li className="menu-item"><a href="#banner-section">home</a></li>

              </Link>
              <li className="menu-item"><a href="#top-picks">top picks</a></li>
              <li className="menu-item menu-item-has-children">
                <a href="" className="js-toggle-sub-menu">pages <i className="fas fa-chevron-down"></i></a>
                <ul className="sub-menu js-sub-menu">
                  <Link to="/login">
                  <li className="sub-menu-item"><a href="#log-in">log in</a></li>
                  
                  </Link>
                  <li className="sub-menu-item"><a href="#log-in">sign up</a></li>
                </ul>
              </li>
              <li className="menu-item"><a href="#contact">contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
