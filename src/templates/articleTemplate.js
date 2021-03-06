import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

const MyH1 = (props) => <h1 style={{ color: 'tomato' }} {...props} />;
const MyParagraph = (props) => (
  <h2 style={{ fontSize: '18px', lineHeight: 1.6, backgroundColor: 'blue', textAlign: 'center' }} {...props} />
);

const components = {
  h1: MyH1,
  h2: MyParagraph,
};

export default function Template({ data }) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = mdx;
  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <MDXProvider components={components}>
          <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} />
        </MDXProvider>
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
