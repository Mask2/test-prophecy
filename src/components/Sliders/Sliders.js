/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import styles from './Sliders.module.css';

const Sliders = ({ title, img }) => (
  <div
    className={styles.wrapper}
    sx={{
      backgroundImage: `url(${img})`,
      height: ['slideMobileHeight', 'slideHeight'],
      bg: 'white',
      boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
    }}
  >
    <div
      sx={{
        variant: ['texts.h3', 'texts.h1'],
        color: 'white',
      }}
    >
      {title}
    </div>
  </div>
);
export default Sliders;
