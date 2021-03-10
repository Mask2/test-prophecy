/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchButton.module.css';

const SearchButton = () => {
  const [showCover, setShowCover] = useState(false);
  const [curValue, setCurValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.search.value) {
      navigate('/search', {
        state: {
          value: e.target.search.value,
        },
      });
      setShowCover(false);
    }
  };
  return (
    <>
      <div
        className={styles.icon}
        sx={{
          color: 'text',
          width: 'icon',
          height: 'icon',
          fontSize: 1,
          mr: 1,
        }}
        onClick={() => setShowCover(true)}
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={classnames(styles.cover, showCover ? styles.showCover : '')} sx={{ bg: 'text' }}>
        <div
          className={styles.icon}
          sx={{
            color: 'primary',
            width: '32px',
            height: '32px',
            fontSize: 3,
            mr: 1,
            position: 'fixed',
            right: 4,
            top: 4,
            zIndex: 10,
          }}
          onClick={() => setShowCover(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className={styles.inputWrapper} sx={{ maxWidth: '580px', p: '50px', width: '580px' }}>
          <form onSubmit={handleSubmit} sx={{ width: '100%', m: 0 }}>
            <input
              name='search'
              value={curValue}
              onChange={(e) => setCurValue(e.target.value)}
              className={styles.input}
              sx={{ width: '100%', fontSize: 6 }}
            />
          </form>
          <div
            className={styles.icon}
            sx={{
              color: 'primary',
              width: '64px',
              height: '64px',
              fontSize: 3,
              mr: 1,
            }}
            onClick={() => setCurValue('')}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchButton;
