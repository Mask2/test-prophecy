/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookMessenger, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
const iconList = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/prophecy.health/',
    icon: faFacebookF,
  },
  {
    name: 'Facebook messenger',
    url: 'https://m.me/prophecy.health',
    icon: faFacebookMessenger,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/take2-health',
    icon: faLinkedinIn,
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/channel/UCvZ29L5oDOpzIOJnGG-YZaA/',
    icon: faYoutube,
  },
];
const Social = () => {
  return (
    <div className={styles.wrapper}>
      {iconList.map((item) => (
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
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </div>
      ))}
    </div>
  );
};
export default Social;
