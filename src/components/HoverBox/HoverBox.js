/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import styles from './HoverBox.module.css';

const HoverBox = ({ sx, children }) => {
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
        ...sx,
      }}
    >
      {children}
    </div>
  );
};

export default HoverBox;
