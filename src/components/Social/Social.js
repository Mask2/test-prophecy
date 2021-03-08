/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookMessenger, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Social = () => {
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
    <div className={styles.wrapper}>
      {site.siteMetadata.social.map((item) => (
        <div key={item.name} sx={{ height: 'icon', width: 'icon', fontSize: 2, mr: 3 }}>
          {item.name === 'Facebook' && (
            <a
              className={styles.link}
              href={item.url}
              target='_blank'
              title={item.name}
              rel='nofollow'
              sx={{
                color: 'text',
                ':hover': {
                  color: 'secondary',
                },
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          )}
          {item.name === 'Facebook messenger' && (
            <a className={styles.link} href={item.url} target='_blank' title={item.name} rel='nofollow'>
              <FontAwesomeIcon key={item.name} icon={faFacebookMessenger} />
            </a>
          )}
          {item.name === 'LinkedIn' && (
            <a className={styles.link} href={item.url} target='_blank' title={item.name} rel='nofollow'>
              <FontAwesomeIcon key={item.name} icon={faLinkedinIn} />
            </a>
          )}
          {item.name === 'Youtube' && (
            <a className={styles.link} href={item.url} target='_blank' title={item.name} rel='nofollow'>
              <FontAwesomeIcon key={item.name} icon={faYoutube} />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
export default Social;
