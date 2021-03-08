/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '/src/components/Seo';
import Sliders from '/src/components/Sliders/Sliders';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.module.css';

import JSONData from '../../data/pageInfo.json';

const Layout = ({ children, location }) => {
  const [curPageInfo, setCurPageInfo] = useState({});
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);
  useEffect(() => {
    const curPageInfo = JSONData.find((item) => item.path === location.pathname);
    setCurPageInfo(curPageInfo || {});
  }, [location.pathname]);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>
          <SEO title={curPageInfo.title} />
          <Sliders title={curPageInfo.title} img={curPageInfo.img} />
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
