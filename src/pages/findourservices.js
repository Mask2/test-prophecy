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
      <div sx={{ display: 'flex', justifyContent: 'center', py: 6, mx: 'auto', maxWidth: 'maxWidth' }}>
        {curMenu.map((child) => (
          <HoverBox
            key={child.path}
            sxx={{
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 2,
              fontWeight: 'bold',
              mx: 4,
              px: 9,
              boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              scrollTo(`#${child.id}`);
            }}
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
    </div>
  );
};

export default introductionPage;
