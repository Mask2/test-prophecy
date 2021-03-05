/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import styles from './HoverBox.module.css';

const HoverBox = (props) => {
  return (
    <div className={styles.wrapper} sx={{ color: 'primary' }}>
      <div className={styles.content}>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.metainfo}>
          {props.date} {props.auth ? '|' : ''} {props.auth}
        </p>
      </div>
    </div>
  );
};

export default HoverBox;
