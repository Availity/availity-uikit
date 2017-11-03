import React from 'react';
import ReactHtmlParser from 'react-html-parser';


const Component = ({ html, title }) =>
  (
    <div>
      <h2>{title}</h2>
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
    <div>
      <h1 className="sr-only">Components Page</h1>
      { componentsList }
    </div>
  );
};

export default ComponentsPage;

export const pageQuery = graphql`
  query ComponentsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
            title
          }
          html
        }
      }
    }
  }
`;
