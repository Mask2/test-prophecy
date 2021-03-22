/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

import styles from './PostCard.module.css';

const PostCard = (props) => (
  <Link sx={{ textDecoration: 'none', ...props.sx }} to={props.path} className={props.className}>
    <div sx={{ position: 'relative' }}>
      {props.withCover && (
        <div className={styles.cover} sx={{ variant: 'texts.body2', p: 2 }}>
          {props.title}
        </div>
      )}
      <img className={styles.image} src={props.image} alt='' />
    </div>
    <div sx={{ variant: 'hovers.orange1' }}>
      <h4 sx={{ fontSize: 2, mb: 2 }}>{props.title}</h4>
      <p sx={{ fontSize: 0, m: 0, lineHeight: 'info' }}>
        {props.date} {props.auth ? '|' : ''} {props.auth}
      </p>
    </div>
  </Link>
);

export default PostCard;
