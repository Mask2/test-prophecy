/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import styles from './HoverBox.module.css';

const HoverBox = ({ children, sxx, onClick }) => {
  return (
    <div
      className={styles.wrapper}
      sx={{
        p: 3,
        color: 'primary',
        ':hover': {
          color: 'text',
        },
        bg: 'text',
        ...sxx,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default HoverBox;
