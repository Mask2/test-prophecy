/** @jsx jsx */
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
import styles from './header.module.css';
import classnames from 'classnames';
import JSONData from '../data/menu.json';

import logo from '../assets/images/taketwologo_2.png';

const Header = () => {
  const [bgColor, setBgColor] = useState('none');
  const [menuState, setMenuState] = useState(false);
  const [current, setCurrent] = useState(null);
  return (
    <>
      <Waypoint onEnter={() => setBgColor('')} onLeave={() => setBgColor('primary')} />
      <header
        className={styles.header}
        sx={{
          bg: bgColor,
          color: 'text',
        }}
      >
        <div className={styles.wrapper}>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt='logo' />
          </Link>
          <div className={styles.menuBtn} onClick={() => setMenuState(true)}>
            按钮
          </div>
        </div>
      </header>
      <div className={classnames(styles.menu, menuState ? styles.showMenu : '')} sx={{ bg: 'primary', color: 'text' }}>
        <div className={styles.menuWrapper}>
          <ul className={styles.mainMenu}>
            {JSONData.map((item, index) => (
              <li key={index} onMouseEnter={() => setCurrent(index)}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul className={styles.subMenu}>
            {JSONData[current]?.children.length
              ? JSONData[current]?.children.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))
              : null}
          </ul>
          <ul className={styles.contact}>
            <li>
              <Link to='/'>加入我們</Link>
            </li>
            <li>
              <Link to='/'>聯絡我們</Link>
            </li>
          </ul>
        </div>
        <div className={styles.closeBtn} onClick={() => setMenuState(false)}>
          关闭
        </div>
      </div>
    </>
  );
};

export default Header;
