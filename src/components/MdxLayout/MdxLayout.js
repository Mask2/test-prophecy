/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Video from '../Video/Video';
import styles from './MdxLayout.module.css';

const components = {
  Video,
};

const iconList = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/prophecy.health/',
    icon: faFacebookF,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/take2-health',
    icon: faLinkedinIn,
  },
  {
    name: 'Whatsapp',
    url:
      'https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.prophecy.health%2F%25e4%25ba%2586%25e8%25a7%25a3%25e9%25bc%25bb%25e5%2592%25bd%25e7%2599%258c%25e6%2588%2590%25e5%259b%25a0%25e3%2580%2581%25e7%2597%2587%25e7%258b%2580%25e3%2580%2581%25e6%25aa%25a2%25e6%259f%25a5%25e5%258f%258a%25e9%25a0%2590%25e9%2598%25b2%25e6%2596%25b9%25e6%25b3%2595%25ef%25bc%2581%2F',
    icon: faWhatsapp,
  },
  {
    name: 'Email',
    url:
      'mailto:?subject=Post%3A%20%E4%BA%86%E8%A7%A3%E9%BC%BB%E5%92%BD%E7%99%8C%E6%88%90%E5%9B%A0%E3%80%81%E7%97%87%E7%8B%80%E5%8F%8A%E6%AA%A2%E6%B8%AC%E6%96%B9%E6%B3%95%EF%BC%81&body=https%3A%2F%2Fwww.prophecy.health%2F%25e4%25ba%2586%25e8%25a7%25a3%25e9%25bc%25bb%25e5%2592%25bd%25e7%2599%258c%25e6%2588%2590%25e5%259b%25a0%25e3%2580%2581%25e7%2597%2587%25e7%258b%2580%25e3%2580%2581%25e6%25aa%25a2%25e6%259f%25a5%25e5%258f%258a%25e9%25a0%2590%25e9%2598%25b2%25e6%2596%25b9%25e6%25b3%2595%25ef%25bc%2581%2F',
    icon: faEnvelope,
  },
];

const MdxLayout = ({ children, pageContext }) => {
  return (
    <div sx={{ bg: 'blue.muted1', pb: 6, display: 'flex' }}>
      <div
        className={styles.wrapper}
        sx={{
          maxWidth: 'maxWidth',
          bg: 'white',
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
            color: 'blue.primaryText',
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
          {iconList.map((item) => (
            <div className={styles.icon} key={item.name}>
              <a
                href={item.url}
                target='_blank'
                title={item.name}
                className={styles.link}
                sx={{
                  variant: 'iconSmall',
                  color: 'blue.primaryText',
                  mx: 1,
                }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </div>
          ))}
        </div>
        <header sx={{ my: 3 }}>
          <h2 sx={{ variant: 'texts.h3', color: 'blue.primary', mt: 6 }}>{pageContext.frontmatter.title}</h2>
          <div sx={{ variant: 'texts.caption', color: 'gray.secondary', mb: 2 }}>
            {pageContext.frontmatter.date}|
            <span className={styles.author} onClick={() => navigate(-1)}>
              {pageContext.frontmatter.author}
            </span>
          </div>
        </header>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </div>
  );
};

export default MdxLayout;
