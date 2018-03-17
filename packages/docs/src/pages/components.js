import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import groupBy from 'lodash.groupby';
import map from 'lodash.map';
import slugify from 'slugify';
import PropTypes from 'prop-types';
import 'holderjs';

const Component = ({ html, title }) => (
  <div>
    <h3>{title}</h3>
    <div className="docs-example"> {ReactHtmlParser(html)}</div>
  </div>
);

Component.propTypes = {
  html: PropTypes.string,
  title: PropTypes.string,
};

const ComponentGroup = ({ groupName, components }) => {
  const componentsList = map(components, component => (
    <Component
      key={slugify(component.node.frontmatter.title)}
      title={component.node.frontmatter.title}
      html={component.node.html}
    />
  ));

  return (
    <div>
      <h2 className="docs-title">{groupName}</h2>
      {componentsList}
    </div>
  );
};

ComponentGroup.propTypes = {
  groupName: PropTypes.string,
  components: PropTypes.object,
};

const ComponentsPage = ({ data }) => {
  const components = data.allMarkdownRemark.edges;

  // Group by frontmatter category property
  const componentsGrouped = groupBy(components, component => component.node.frontmatter.category);
  // Generate component group sections
  const componntsGroupList = map(componentsGrouped, (components, componentGroupName) => (
    <ComponentGroup key={slugify(componentGroupName)} groupName={componentGroupName} components={components} />
  ));

  return (
    <main className="docs-masthead">
      <h1 className="sr-only">Components Page</h1>
      <div className="container">
        <div>{componntsGroupList}</div>
      </div>
    </main>
  );
};

ComponentsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.string,
  }),
};

export default ComponentsPage;

export const pageQuery = graphql`
  query ComponentsQuery {
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
