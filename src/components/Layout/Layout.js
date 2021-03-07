/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '/src/components/seo';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.module.css';

import JSONData from '../../data/pageInfo.json';

const Layout = ({ children, location }) => {
  const [currentTitle, setCurrentTitle] = useState('');
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
    const title = JSONData.find((item) => item.path === location.pathname)?.title;
    setCurrentTitle(title);
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
          <SEO title={currentTitle} />
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
