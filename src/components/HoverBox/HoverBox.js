/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import styles from './HoverBox.module.css';

const HoverBox = ({ sx, children, ...rest }) => {
  return (
    <div
      sx={{
        p: 3,
        color: 'primary',
        ':hover': {
          color: 'text',
        },
        bg: 'text',
        ...sx,
      }}
      {...rest}
      className={styles.wrapper}
    >
      {children}
    </div>
  );
};

export default HoverBox;
