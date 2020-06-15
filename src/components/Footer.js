import React from 'react';
import classes from './footer.module.css'
import { Link } from 'gatsby'
const Footer = () => {
  return (
    <footer className="w-100 shadow mt-3 footer">
      <div className={classes.miniFooter}>
        <div className="container">
          <div className="row">
            <div className={`${classes.copyrightAria} col-md-12`}>
              <div>
                <div className="copyright-text">
                  <p>© {new Date().getFullYear()}
                    <a href="https://facebook.com/manikroy89" target="_blank" rel="noopener noreferrer"> Manik Roy</a>. All rights reserved. Created by
                <a href="https://facebook.com/manikroy89" target="_blank" rel="noopener noreferrer"> Manik</a>
                  </p>
                </div>
              </div>
              <div className="go_top">
                <span className="icon-arrow-up"></span>
              </div>
            </div>
            <div className={`${classes.footerMenu} col`}>
              <div className={classes.forMobile}>
                <nav className="navbar navbar-light">
                  <ul className="navbar-nav d-flex flex-row justify-content-around">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/blog">Blog</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;