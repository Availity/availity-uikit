import React from 'react';
import Browser from '../components/Browser';
import Link from 'gatsby-link';

const IndexPage = () => (
  <main className="docs-masthead">
    <div className="text-center docs-home-title bg-dark">
      <h1>Availity UIKit</h1>
      <h4>Beautiful Healthcare Apps</h4>
      <Link class="btn btn-default docs-btn btn-lg" to="/components">Documentation</Link>
      <a class="btn btn-default docs-btn btn-lg" href="https://github.com/Availity/availity-uikit">Github</a>
      <a class="btn btn-default docs-btn btn-lg" href="https://github.com/Availity/availity-uikit/releases/tag/v3.0.0">Changelog</a>
      <a class="btn btn-default docs-btn btn-lg" href="v1">v1</a>
      <a class="btn btn-default docs-btn btn-lg" href="v2">v2</a>
      <h4>v3.0.0</h4>
    </div>
    <div className="container-sm">
      <div className="row justify-content-sm-center">
        <Browser />
        <div className="docs-intro mt-5">
          <h4>The Availity UIKit is derived from <a href="https://getbootstrap.com/">Bootstrap 4</a> and allows developers to create stunning web applications for the Availity Spaces platform. </h4>
          <h5>This guide will document any modifications done to the Bootstrap framework. Original Bootstrap conventions were preserved as much as possible.</h5>
          <h5>The Availity UIKit is available through <a href="https://github.com/Availity/availity-uikit">Github</a>, <a href="https://bower.io/search/?q=availity-uikit">Bower</a> and <a href="https://www.npmjs.com/package/availity-uikit">NPM</a>. </h5>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;
