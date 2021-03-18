/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import PostCard from '../components/PostCard/PostCard';

export const query = graphql`
  {
    allMdx(filter: { slug: { regex: "/healthinfo/" } }, sort: { fields: frontmatter___date, order: DESC }) {
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
const NewsPage = ({ data }) => (
  <div sx={{ bg: 'secondary', pt: 8, pb: 9 }}>
    <div sx={{ maxWidth: 'maxWidth', mx: 'auto' }}>
      <h1 sx={{ textAlign: 'center', pb: 5, color: 'white', fontWeight: 'body' }}>
        緊貼最新健康資訊，提高個人生活質素。
      </h1>
      <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
  </div>
);

export default NewsPage;
