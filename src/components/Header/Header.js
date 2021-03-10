/** @jsx jsx */
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
import styles from './Header.module.css';
import classnames from 'classnames';
import JSONData from '../../data/menu.json';

import logo from '../../assets/images/taketwologo_2.png';

const Header = () => {
  const [bgColor, setBgColor] = useState(window.location.pathname === '/' ? '' : 'primary');
  const [menuState, setMenuState] = useState(false);
  const [current, setCurrent] = useState(null);
  return (
    <>
      {window.location.pathname === '/' && (
        <Waypoint onEnter={() => setBgColor('')} onLeave={() => setBgColor('primary')} />
      )}
      <header
        className={styles.header}
        sx={{
          height: window.location.pathname === '/' ? 0 : 'headerHeight',
        }}
      >
        <div
          className={styles.wrapper}
          sx={{ bg: bgColor, boxShadow: bgColor ? '0 12px 14px 0 rgb(0 0 0 / 10%)' : '' }}
        >
          <div
            className={styles.innerWrapper}
            sx={{
              maxWidth: 'maxWidth',
              height: 'headerHeight',
              px: 4,
              color: 'text',
            }}
          >
            <Link sx={{ color: 'text' }} to='/'>
              <img className={styles.logo} src={logo} alt='logo' sx={{ height: 'headerHeight' }} />
            </Link>
            <div className={styles.menuBtn} onClick={() => setMenuState(true)}>
              按钮
            </div>
          </div>
        </div>
      </header>
      <div className={classnames(styles.menu, menuState ? styles.showMenu : '')} sx={{ bg: 'primary', color: 'text' }}>
        <div className={styles.menuWrapper} sx={{ maxWidth: 'maxWidth' }}>
          <ul className={styles.mainMenu}>
            {JSONData.map((item, index) => (
              <li key={index} onMouseEnter={() => setCurrent(index)}>
                <Link sx={{ color: 'text' }} to={item.path} onClick={() => setMenuState(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.subMenu}>
            {JSONData[current]?.children.length
              ? JSONData[current]?.children.map((item, index) => (
                  <li key={index}>
                    <Link sx={{ color: 'text' }} to={item.path} onClick={() => setMenuState(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
          <ul className={styles.contact}>
            <li>
              <Link sx={{ color: 'text' }} to='/'>
                加入我們
              </Link>
            </li>
            <li>
              <Link sx={{ color: 'text' }} to='/'>
                聯絡我們
              </Link>
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
