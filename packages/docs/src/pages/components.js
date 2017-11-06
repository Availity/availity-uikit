import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import 'holderjs';


const Component = ({ html, title }) =>
  (
    <div>
      <h3>{title}</h3>
      <div>
        { ReactHtmlParser(html) }
      </div>
    </div>
  );

const ComponentsPage = ({ data }) => {
  const components = data.allMarkdownRemark.edges;

  /* eslint-disable react/no-array-index-key */
  const componentsList = components.map((component, i) => (
    <Component
      key={i}
      title={component.node.frontmatter.title}
      html={component.node.html}
    />
  ));

  return (
    <main className="docs-masthead">
      <h1 className="sr-only">Components Page</h1>
      <div className="container">
        { componentsList }
      </div>
    </main>
  );
};

export default ComponentsPage;

export const pageQuery = graphql`
  query BootstrapComponents {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___category, frontmatter___title] }
    ) {
      edges{
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
