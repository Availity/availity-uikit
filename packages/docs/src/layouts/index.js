import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'availity-uikit';

import Navigation from '../components/Navigation';
import meta from './meta';

import './index.scss';

const TemplateWrapper = props => (
  <div>
    <Helmet
      title="Availity UIKit"
      meta={meta}
    />
    <Navigation {...props} />
    {props.children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
