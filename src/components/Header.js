import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './header.module.css'
import { Link } from 'gatsby'
const Header = () => {
  return (
    <div className="position-sticky sticky-top shadow mb-3 ">
      <nav className="navbar  navbar-expand-lg navbar-light container navbar-fixed-top">
        <Link className="navbar-brand" to="/">Manik Roy</Link>
        <ul className={`${classes.desktopNav} navbar-nav  ml-auto`}>
          <li className="nav-item active">
            <Link className="nav-link" activeClassName={classes.active} to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName={classes.active} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName={classes.active} to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName={classes.active} to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName={classes.active} to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName={classes.active} to="/achievement">Achievement</Link>
          </li>
          <li className="nav-item cv-download">
            <a className="nav-link" href="http://freepdfhosting.com/73a1f9ce2e.pdf " rel="noopener noreferrer" target="_blank" >Download CV</a>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Header;