import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = mdx;
  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
