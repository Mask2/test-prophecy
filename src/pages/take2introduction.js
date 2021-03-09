/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { withPrefix } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styles from './take2introduction.module.css';
import HoverBox from '/src/components/HoverBox/HoverBox';
import MenusData from '/src/data/menu.json';
const introductionPage = ({ location }) => {
  const [curMenu, setCurMenu] = useState([]);
  useEffect(() => {
    setCurMenu(MenusData.find((menu) => menu.path === withPrefix(location.pathname))?.children || []);
  }, [location.pathname]);
  return (
    <div className={styles.wrapper} sx={{ backgroundImage: 'gradientMuted' }}>
      <div sx={{ display: 'flex', justifyContent: 'center' }}>
        {curMenu.map((child) => (
          <HoverBox
            key={child.path}
            onClick={() => {
              scrollTo(`#${child.id}`);
            }}
            sx={{ px: 5 }}
          >
            {child.name}
          </HoverBox>
        ))}
      </div>
      <section id={curMenu[0]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', height: '100vh' }}>
        test
      </section>
      <section id={curMenu[1]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', height: '100vh' }}>
        test
      </section>
      <section id={curMenu[2]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', height: '100vh' }}>
        test
      </section>
      <section id={curMenu[3]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', height: '100vh' }}>
        test
      </section>
    </div>
  );
};

export default introductionPage;
