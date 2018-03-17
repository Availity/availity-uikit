import React from 'react';
import Link from 'gatsby-link';
import Browser from '../components/Browser';

const IndexPage = ({ data }) => (
  <main className="docs-masthead">
    <div className="container-sm">
      <div className="row justify-content-sm-center">
        <div className="mb-4">
          <Link class="btn btn-outline-secondary mr-2" to="/components">
            Documentation
          </Link>
          <a className="btn btn-outline-secondary mr-2" href="https://github.com/Availity/availity-uikit">
            Github
          </a>
          <a
            className="btn btn-outline-secondary mr-2"
            href="https://github.com/Availity/availity-uikit/releases/tag/v3.0.0"
          >
            Changelog
          </a>
          <a className="btn btn-outline-secondary mr-2" href={`${data.site.siteMetadata.v1}`}>
            v1
          </a>
          <a className="btn btn-outline-secondary" href={`${data.site.siteMetadata.v2}`}>
            v2
          </a>
        </div>
        <Browser />
        <div className="mt-4">
          <p className="lead text-center">
            The Availity UIKit is derived from <a href="https://getbootstrap.com/">Bootstrap 4</a> and allows developers
            to create stunning web applications for the Availity Spaces platform.{' '}
          </p>
          <p className="lead text-center">
            This guide will document any modifications done to the Bootstrap framework. Original Bootstrap conventions
            were preserved as much as possible.
          </p>
          <p className="lead text-center">
            The Availity UIKit is available through <a href="https://github.com/Availity/availity-uikit">Github</a>,{' '}
            <a href="https://www.npmjs.com/package/availity-uikit">NPM</a>.{' '}
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query LandingPageQuery {
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
`;
