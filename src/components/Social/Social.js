/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookMessenger, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
const iconList = [faFacebookF, faFacebookMessenger, faLinkedinIn, faYoutube];
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
      {site.siteMetadata.social.map(
        (item, index) =>
          iconList[index] && (
            <div key={item.name} sx={{ fontSize: 2, mr: 1 }}>
              <a
                className={styles.link}
                href={item.url}
                target='_blank'
                title={item.name}
                rel='nofollow'
                sx={{
                  variant: 'buttons.iconSmall',
                  color: 'white',
                  ':hover': {
                    color: 'orange.primary',
                  },
                }}
              >
                <FontAwesomeIcon icon={iconList[index]} />
              </a>
            </div>
          ),
      )}
    </div>
  );
};
export default Social;
