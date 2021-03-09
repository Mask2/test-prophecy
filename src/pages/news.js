/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import PostCard from '../components/PostCard/PostCard';

export const query = graphql`
  {
    allMdx(filter: { slug: { regex: "/news/" } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(locale: "YYYY-MM-DD")
          image
        }
        slug
      }
    }
  }
`;
const newsPage = ({ data }) => (
  <div sx={{ bg: 'muted', pt: 8, pb: 9 }}>
    <div sx={{ maxWidth: 'maxWidth', mx: 'auto', display: 'flex', flexWrap: 'wrap' }}>
      {data.allMdx.nodes.map((node) => (
        <PostCard
          sx={{ maxWidth: ['100%', '30.2%'], m: [2, '1.5%'] }}
          key={node.id}
          {...node.frontmatter}
          path={`/${node.slug}`}
        />
      ))}
    </div>
  </div>
);

export default newsPage;
