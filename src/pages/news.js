/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql, Link } from 'gatsby';
import PostCard from '../components/PostCard/PostCard';
import JSONData from '/src/data/pageInfo.json';
import styles from './post.module.css';

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
const NewsPage = ({ data }) => (
  <div sx={{ bg: 'blue.secondary', pt: 9, pb: 6 }}>
    <div sx={{ maxWidth: 'maxWidth', mx: 'auto' }}>
      <div sx={{ textAlign: 'center', pb: 5, fontWeight: 'bold', fontSize: 3 }}>
        {JSONData.filter((item) => item.path === '/promotions' || item.path === '/news').map((item) => (
          <Link
            sx={{
              color: 'white',
              mx: 5,
              py: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            css={{
              ':after': {
                color: 'primary',
              },
            }}
            key={item.path}
            to={item.path}
            activeClassName={styles.activeLink}
            replace
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.allMdx.nodes.map((node) => (
          <PostCard
            sx={{ maxWidth: ['100%', '30.2%'], m: [2, '1.5%'] }}
            key={node.id}
            {...node.frontmatter}
            path={`/${node.slug}`}
            withCover
          />
        ))}
      </div>
    </div>
  </div>
);

export default NewsPage;
