/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import HoverBox from '../HoverBox/HoverBox';

import styles from './PostCard.module.css';

const PostCard = (props) => (
  <Link sx={{ textDecoration: 'none' }} to={props.path} className={props.className}>
    <img className={styles.image} src={props.image} alt='' />
    <HoverBox>
      <h4 sx={{ fontSize: 2, mb: 2 }}>{props.title}</h4>
      <p sx={{ fontSize: 0, m: 0, lineHeight: 'info' }}>
        {props.date} {props.auth ? '|' : ''} {props.auth}
      </p>
    </HoverBox>
  </Link>
);

export default PostCard;
