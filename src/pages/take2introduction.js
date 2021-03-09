/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import styles from './take2introduction.module.css';
import ScrollNav from '/src/components/ScrollNav/ScrollNav';

const introductionPage = ({ location }) => {
  return (
    <div className={styles.wrapper} sx={{ backgroundImage: 'gradientMuted' }}>
      <ScrollNav curPath={location.pathname} />
      <section sx={{ mx: 'auto', maxWidth: 'maxWidth', height: '100vh' }}>test</section>
    </div>
  );
};

export default introductionPage;
