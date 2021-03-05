/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import HoverBox from '../HoverBox/HoverBox';

import styles from './PostCard.module.css';

const PostCard = (props) => (
  <Link to={props.path} className={props.className}>
    <img className={styles.image} src={props.image} alt='' />
    <HoverBox title={props.title} date={props.date} auth={props.auth} />
  </Link>
);

export default PostCard;
