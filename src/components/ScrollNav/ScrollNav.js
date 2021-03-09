/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { withPrefix } from 'gatsby';
import styles from './ScrollNav.module.css';
import HoverBox from '/src/components/HoverBox/HoverBox';
import MenusData from '/src/data/menu.json';

const ScrollNav = ({ curPath }) => (
  <div className={styles.wrapper}>
    {MenusData.find((menu) => menu.path === withPrefix(curPath)).children.map((child) => (
      <HoverBox key={child.path} onClick={() => console.log('onClick')} sx={{ px: 5 }}>
        {child.name}
      </HoverBox>
    ))}
  </div>
);
export default ScrollNav;
