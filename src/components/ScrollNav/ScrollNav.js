/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link, withPrefix } from 'gatsby';
import styles from './ScrollNav.module.css';
import HoverBox from '/src/components/HoverBox/HoverBox';
import MenusData from '/src/data/menu.json';

const ScrollNav = ({ curPath }) => (
  <div className={styles.wrapper}>
    {MenusData.find((menu) => menu.path === withPrefix(curPath)).children.map((child) => (
      <Link key={child.path} to={child.path} sx={{ textDecoration: 'none' }}>
        <HoverBox>{child.name}</HoverBox>
      </Link>
    ))}
  </div>
);
export default ScrollNav;
