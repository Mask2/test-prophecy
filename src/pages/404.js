/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';

import { jsx } from 'theme-ui';

const NotFoundPage = () => (
  <div sx={{ mx: 'auto', maxWidth: 'maxWidth', textAlign: 'center', pt: 8, pb: 7, color: 'primary' }}>
    <h1 sx={{ color: 'errorText', fontSize: 7, fontWeight: 'light', mb: 7 }}>404</h1>
    <p sx={{ mb: 6 }}>對不起，未能找到頁面。返回首頁尋找更多。</p>
    <p>Sorry, we can’t find the page you’re looking for. Go back to homepage for more information.</p>
    <Link
      to='/'
      sx={{
        fontSize: 1,
        fontWeight: 'bold',
        color: 'text',
        bg: 'button',
        py: '12px',
        px: 7,
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      返回首頁
    </Link>
  </div>
);

export default NotFoundPage;
