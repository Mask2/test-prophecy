import React from 'react';

const MdxLayout = ({ children, pageContext }) => (
  <div>
    <h1>My Layout</h1>
    <div>{pageContext.frontmatter.date}</div>
    <div style={{ width: 400, margin: '0 auto', background: 'blue' }}>{children}</div>
  </div>
);

export default MdxLayout;
