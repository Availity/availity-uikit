import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import groupBy from 'lodash.groupby';
import map from 'lodash.map';
import slugify from 'slugify';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import 'holderjs';
import PrismCode from 'react-prism';
import Layout from '../components/Layout';

require('prismjs');

const Component = ({ html, title, id }) => (
  <>
    <h3 id={id}>{title}</h3>
    <div className="docs-example"> {ReactHtmlParser(html)}</div>
    <a className="btn btn-default mb-4" href={`#${id}-code`} data-toggle="collapse">
      View Code
    </a>
    <div id={`${id}-code`} className="collapse">
      <PrismCode component="pre" className="language-markup">
        {html}
      </PrismCode>
    </div>
  </>
);

Component.propTypes = {
  html: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

const ComponentGroup = ({ groupName, components }) => {
  const componentsList = map(components, (component) => (
    <Component
      key={slugify(component.node.frontmatter.title)}
      title={component.node.frontmatter.title}
      html={component.node.html}
      id={`${slugify(groupName, '-')}-${slugify(component.node.frontmatter.title, '-')}`}
    />
  ));

  return (
    <>
      <h2 id={slugify(groupName, '-')} className="docs-title">
        {groupName}
      </h2>
      {componentsList}
    </>
  );
};

ComponentGroup.propTypes = {
  groupName: PropTypes.string,
  components: PropTypes.array,
};

const SideMenu = ({ title, id }) => (
  <li className="docs-nav-item">
    <a href={id}>{title}</a>
  </li>
);

SideMenu.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

const ComponentSideMenu = ({ groupName, components }) => {
  const componentsList = map(components, (component) => (
    <SideMenu
      key={slugify(component.node.frontmatter.title)}
      title={component.node.frontmatter.title}
      id={`#${slugify(groupName, '-')}-${slugify(component.node.frontmatter.title, '-')}`}
    />
  ));

  return (
    <nav>
      <ul className="docs-nav">
        <li className="docs-nav-title">
          <a href={`#${slugify(groupName, '-')}`}>{groupName}</a>
        </li>
        <ul>{componentsList}</ul>
      </ul>
    </nav>
  );
};

ComponentSideMenu.propTypes = {
  groupName: PropTypes.string,
  components: PropTypes.array,
};

const ComponentsPage = ({ data, ...props }) => {
  const components = data.allMarkdownRemark.edges;

  // Group by frontmatter category property
  const componentsGrouped = groupBy(components, (component) => component.node.frontmatter.category);
  // Generate component group sections
  const componntsGroupList = map(componentsGrouped, (components, componentGroupName) => (
    <ComponentGroup key={slugify(componentGroupName)} groupName={componentGroupName} components={components} />
  ));
  // Generate side menu using component-group-component-name
  const componentSideMenuItems = map(componentsGrouped, (components, componentGroupName) => (
    <ComponentSideMenu key={slugify(componentGroupName)} groupName={componentGroupName} components={components} />
  ));

  return (
    <Layout {...props}>
      <main className="docs-masthead">
        <h1 className="sr-only">Components Page</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-sm-9">{componntsGroupList}</div>
            <div className="col-md-4 col-sm-3">{componentSideMenuItems}</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

ComponentsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
};

export default ComponentsPage;

export const pageQuery = graphql`
  query ComponentsQuery {
    site {
      siteMetadata {
        v1
        v2
        v3
        title
        description
        keywords
        version
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___category, frontmatter___title] }) {
      edges {
        node {
          html
          frontmatter {
            title
            category
          }
        }
      }
    }
    file {
      relativePath
    }
  }
`;
