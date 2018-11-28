import React from 'react';
import Layout from '../components/Layout';

import fontConfig from '../../../../utils/fontConfig';

const { prefix, icons } = fontConfig;

const Icons = icons.map(icon => (
  <div className="col-sm-3 text-center mb-4" key={icon.unicode}>
    <i className={`${prefix} ${prefix}-${icon.icon} ${prefix}-2x`} />
    <span className="d-block text-center">{`${prefix}-${icon.icon}`}</span>
    <span className="d-block text-center">{icon.unicode}</span>
  </div>
));

const IconsPage = ({ ...props }) => (
  <Layout {...props}>
    <main className="docs-masthead">
      <h1 className="sr-only">Components Page</h1>
      <div className="container-fluid">
        <h2 className="docs-title">Sizes</h2>
        <div className="row mb-4">
          <div className="col-sm-2 text-center">
            <i className="icon icon-home" /> <h5 className="subheader">normal</h5>
          </div>
          <div className="col-sm-2 text-center">
            <i className="icon icon-home icon-lg" /> <h5 className="subheader">icon-lg</h5>
          </div>
          <div className="col-sm-2 text-center">
            <i className="icon icon-home icon-xl" /> <h5 className="subheader">icon-xl</h5>
          </div>
          <div className="col-sm-2 text-center">
            <i className="icon icon-home icon-2x" /> <h5 className="subheader">icon-2x</h5>
          </div>
          <div className="col-sm-2 text-center">
            <i className="icon icon-home icon-3x" /> <h5 className="subheader">icon-3x</h5>
          </div>
          <div className="col-sm-2 text-center">
            <i className="icon icon-home icon-4x" /> <h5 className="subheader">icon-4x</h5>
          </div>
          <div className="col-sm-2 text-center">
            <i className="icon icon-home icon-lg icon-5x" /> <h5 className="subheader">icon-5x</h5>
          </div>
        </div>
        <h2 className="docs-title">Icons</h2>
        <div className="row mb-4 justify-content-center">{Icons}</div>
      </div>
    </main>
  </Layout>
);

export default IconsPage;
