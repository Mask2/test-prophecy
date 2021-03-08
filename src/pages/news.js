import React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  {
    allMdx(filter: { slug: { regex: "/news/" } }) {
      nodes {
        id
        frontmatter {
          title
          date(fromNow: true)
        }
        slug
      }
    }
  }
`;
const newsPage = ({ data }) => (
  <>
    {data.allMdx.nodes.map((node) => (
      <div key={node.id} style={{ paddingTop: '100px' }}>
        <Link to={`/${node.slug}`} style={{ color: 'blue' }}>
          {node.frontmatter.title}|{node.frontmatter.date}
        </Link>
      </div>
    ))}
  </>
);

export default newsPage;
