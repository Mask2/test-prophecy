/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import SEO from '/src/components/Seo';
import Sliders from '/src/components/Sliders/Sliders';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.module.css';

import JSONData from '../../data/pageInfo.json';

const HideSlidesPaths = ['/', '/404', '/search', '/docs'];
const Layout = ({ children, location }) => {
  console.log('curent path:', location.pathname, withPrefix(location.pathname));
  const [curPageInfo, setCurPageInfo] = useState({ title: '' });

  useEffect(() => {
    let curPageInfo = JSONData.find((item) => location.pathname.indexOf(item.path) > -1 && item.path !== '/');
    setCurPageInfo(curPageInfo || { title: '' });
  }, [location.pathname]);
  return (
    <>
      <Header pathname={location.pathname} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>
          <SEO title={curPageInfo.title} />
          {!HideSlidesPaths.find((item) => location.pathname === withPrefix(item)) && (
            <Sliders title={curPageInfo.title} img={curPageInfo.img} />
          )}
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
