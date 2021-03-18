/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import styles from './Sliders.module.css';

const Sliders = ({ title, img }) => (
  <div
    className={styles.wrapper}
    style={{
      backgroundImage: `url(${img})`,
    }}
    sx={{ height: 'slideHeight', bg: 'background', boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)' }}
  >
    <div
      sx={{
        color: 'white',
        fontFamily: 'body',
        fontSize: 6,
      }}
    >
      {title}
    </div>
  </div>
);
export default Sliders;
