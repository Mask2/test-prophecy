/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Video from '../video';
import styles from './MdxLayout.module.css';

const components = {
  Video,
};

const MdxLayout = ({ children, pageContext }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              name
              url
            }
          }
        }
      }
    `,
  );

  return (
    <div sx={{ bg: 'muted', pb: 6, display: 'flex' }}>
      <div
        className={styles.wrapper}
        sx={{
          maxWidth: 'maxWidth',
          bg: 'background',
          mx: 'auto',
          mt: -8,
          py: 6,
          px: 4,
          fontSize: 3,
          width: '100%',
        }}
      >
        <div
          className={styles.nav}
          sx={{
            color: 'primaryText',
          }}
        >
          <div
            className={styles.backBtn}
            onClick={() => navigate(-1)}
            sx={{
              mr: 'auto',
            }}
          >
            返回
          </div>
          分享
          {site.siteMetadata.social.map(
            (item) =>
              (item.name === 'Facebook' && (
                <div className={styles.icon} key={item.name}>
                  <a
                    href={item.url}
                    target='_blank'
                    title={item.name}
                    className={styles.link}
                    sx={{
                      width: 'icon',
                      height: 'icon',
                      color: 'primaryText',
                      fontSize: 3,
                      mx: 1,
                    }}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              )) ||
              (item.name === 'LinkedIn' && (
                <div className={styles.icon} key={item.name}>
                  <a
                    href={item.url}
                    target='_blank'
                    title={item.name}
                    className={styles.link}
                    sx={{
                      width: 'icon',
                      height: 'icon',
                      color: 'primaryText',
                      fontSize: 3,
                      mx: 1,
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              )) ||
              (item.name === 'Whatsapp' && (
                <div className={styles.icon} key={item.name}>
                  <a
                    href={item.url}
                    target='_blank'
                    title={item.name}
                    className={styles.link}
                    sx={{
                      width: 'icon',
                      height: 'icon',
                      color: 'primaryText',
                      fontSize: 3,
                      mx: 1,
                    }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>
              )) ||
              (item.name === 'Email' && (
                <div className={styles.icon} key={item.name}>
                  <a
                    href={item.url}
                    target='_blank'
                    title={item.name}
                    className={styles.link}
                    sx={{
                      width: 'icon',
                      height: 'icon',
                      color: 'primaryText',
                      fontSize: 3,
                      mx: 1,
                    }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              )) ||
              null,
          )}
        </div>
        <header sx={{ my: 3 }}>
          <h1 sx={{ fontWeight: 'light', fontSize: 5, color: 'primary' }}>{pageContext.frontmatter.title}</h1>
          <div sx={{ color: 'normalText', fontSize: 3, fontWeight: 300 }}>
            {pageContext.frontmatter.date}|
            <span className={styles.author} onClick={() => navigate(-1)}>
              {pageContext.frontmatter.author}
            </span>
          </div>
        </header>
        <div>
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </div>
    </div>
  );
};

export default MdxLayout;
