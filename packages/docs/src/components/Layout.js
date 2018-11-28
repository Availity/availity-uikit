import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'availity-uikit';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from './Navigation';
import Footer from './Footer';
import meta from './meta';

import './layout.scss';

const TemplateWrapper = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query TemplateQuery {
        site {
          siteMetadata {
            v1
            v2
            title
            description
            keywords
            version
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title="Availity UIKit" meta={meta}>
          <html lang="en" amp />
        </Helmet>

        <Navigation data={data} {...props} />
        {children}
        <Footer />
      </>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

export default TemplateWrapper;
