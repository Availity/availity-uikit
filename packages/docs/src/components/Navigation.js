import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';

import './Navigation.scss';
import logo from './logo.jpg';

const Navigation = ({ location, data }) => (
  <nav className="navbar navbar-expand-md navbar-light">
    <div className="container-fluid">
      <span className="navbar-brand mb-0">
        <img src={logo} alt="Logo" width="30" height="30" className="logo d-inline-block align-top" /> Availity UIKit{' '}
        <small className="text-muted">v{data.site.siteMetadata.version}</small>
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
            <Link className="nav-link docs-nav-link" to="/">
              Home
            </Link>
          </li>
          <li className={location.pathname === withPrefix('/components') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link docs-nav-link" to="/components">
              Components
            </Link>
          </li>
          <li className={location.pathname === withPrefix('/icons') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link docs-nav-link" to="/icons">
              Icons
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link docs-nav-link" href="https://github.com/availity/availity-uikit">
              Github
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link docs-nav-link" href={`${data.site.siteMetadata.v1}`}>
              <code>v1</code>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link docs-nav-link" href={`${data.site.siteMetadata.v2}`}>
              <code>v2</code>
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
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        version: PropTypes.string,
      }),
    }),
  }),
};

export default Navigation;
