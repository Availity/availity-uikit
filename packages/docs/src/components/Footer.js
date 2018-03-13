import React from 'react';
import PropTypes from 'prop-types';
import Link, { withPrefix } from 'gatsby-link';

import './Footer.scss';

const Footer = () => (
  <footer className="footer docs-footer">
    <div className="container">
      <div>Made with <i className="icon icon-heart"></i> by <a href="https://www.availity.com/">Availity</a>
      </div>
    </div>
  </footer>
);

export default Footer;
