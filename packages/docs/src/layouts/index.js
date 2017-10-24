import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'availity-uikit';

import NavBar from '../components/Navbar';
import './index.scss';


const Header = () => <NavBar />;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Availity UIKit"
      meta={[
        { name: 'description', content: 'Availity UIKit powered by Bootstrap 4' },
        { name: 'keywords', content: 'css, bootstrap, uikit' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
