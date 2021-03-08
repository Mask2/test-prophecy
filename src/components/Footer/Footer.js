/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Social from '/src/components/Social/Social';

import styles from './Footer.module.css';
import logo from '../../assets/images/taketwologo_2.png';

const Footer = () => (
  <footer className={styles.footer} sx={{ bg: 'primary', color: 'text' }}>
    <div className={styles.wrapper}>
      <dl className={styles.content}>
        <div
          className={styles.list}
          sx={{
            width: ['100%', '25%'],
          }}
        >
          <dt>
            <img className={styles.logo} src={logo} alt='' />
          </dt>
        </div>
        <div
          className={styles.list}
          sx={{
            width: ['100%', '25%'],
          }}
        >
          <dd>
            <Link className={styles.link} to='/'>
              企業背景
            </Link>
          </dd>
          <dd>
            <Link className={styles.link} to='/'>
              早期鼻咽癌篩查
            </Link>
          </dd>
          <dd>
            <Link className={styles.link} to='/'>
              健康資訊
            </Link>
          </dd>
          <dd>
            <Link className={styles.link} to='/'>
              最新動態及推廣
            </Link>
          </dd>
          <dd>
            <Link className={styles.link} to='/'>
              服務覆蓋點
            </Link>
          </dd>
        </div>
        <div
          className={styles.list}
          sx={{
            width: ['100%', '25%'],
          }}
        >
          <dd>
            <Link className={styles.link} to='/'>
              加入我們
            </Link>
          </dd>
          <dd>
            <Link className={styles.link} to='/'>
              聯絡我們
            </Link>
          </dd>
        </div>
        <div
          className={styles.list}
          sx={{
            width: ['100%', '25%'],
          }}
        >
          <dt>聯絡資料</dt>
          <dd>(852) 3613 0533</dd>
          <dd>info@take2.health</dd>
          <dd>
            <Social />
          </dd>
        </div>
      </dl>
      <div className={styles.divider} />
      <div
        className={styles.copyright}
        sx={{
          pb: ['12px', '70px'],
        }}
      >
        © {new Date().getFullYear()}, Take2 Prophecy™ 版權所有
        <Link className={styles.link} to='/'>
          私隱政策
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
