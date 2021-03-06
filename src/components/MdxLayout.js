import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const MyH1 = (props) => <h1 style={{ color: 'tomato', background: 'red' }} {...props} />;
const MyParagraph = (props) => (
  <h2 style={{ fontSize: '18px', lineHeight: 1.6, backgroundColor: 'blue', textAlign: 'center' }} {...props} />
);

const components = {
  h1: MyH1,
  h2: MyParagraph,
};

const MdxLayout = ({ children, pageContext }) => (
  <div>
    <h1>My Layout</h1>
    <div>{pageContext.frontmatter.date}</div>
    <div style={{ width: 400, margin: '0 auto', background: 'blue' }}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  </div>
);

export default MdxLayout;
