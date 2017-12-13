import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';

import './Navigation.scss';
import logo from './logo.jpg';

const Navigation = ({ location }) => (
  <nav className="navbar navbar-expand-md navbar-light">
    <div className="container">
      <span className="navbar-brand mb-0 h1">
        <img src={logo} alt="Logo" width="30" height="30" className="logo d-inline-block align-top" /> UIKit
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContentTop"
        aria-controls="navbarSupportedContentTop"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContentTop">
        <ul className="navbar-nav ml-auto">
          <li className={location.pathname === withPrefix('/') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link docs-nav-link" to={withPrefix('/')}>
              Home
            </Link>
          </li>
          <li className={location.pathname === withPrefix('/components') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link docs-nav-link" to={withPrefix('/components')}>
              Components
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link docs-nav-link" href="https://github.com/availity/availity-uikit">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Navigation;
