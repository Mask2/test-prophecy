/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link, withPrefix } from 'gatsby';
import { jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
import styles from './Header.module.css';
import classnames from 'classnames';
import SearchButton from '/src/components/SearchButton/SearchButton';
import Social from '/src/components/Social/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import JSONData from '../../data/menu.json';

import logo from '../../assets/images/taketwologo_2.png';

const Header = ({ pathname }) => {
  const [bgColor, setBgColor] = useState('');
  const [menuState, setMenuState] = useState(false);
  const [current, setCurrent] = useState(null);
  const [hasInitBg, setHasInitBg] = useState(false);
  useEffect(() => {
    setHasInitBg(pathname !== withPrefix('/'));
    setBgColor(pathname === withPrefix('/') ? '' : 'blue.primary');
  }, [pathname]);
  return (
    <>
      {!hasInitBg && <Waypoint onEnter={() => setBgColor('')} onLeave={() => setBgColor('blue.primary')} />}
      <header
        className={styles.header}
        sx={{
          height: !hasInitBg ? 0 : 'headerHeight',
        }}
      >
        <div
          className={styles.wrapper}
          sx={{ bg: bgColor, boxShadow: bgColor ? 'header' : '', px: [2, 4], zIndex: 'cover' }}
        >
          <div
            className={styles.innerWrapper}
            sx={{
              maxWidth: 'maxWidth',
              height: 'headerHeight',
              color: 'white',
              mx: 'auto',
            }}
          >
            <Link sx={{ mr: 'auto' }} to='/'>
              <img className={styles.logo} src={logo} alt='logo' sx={{ height: 'headerHeight' }} />
            </Link>
            <SearchButton />
            <div className={styles.menuBtn} sx={{ variant: 'buttons.iconSmall' }} onClick={() => setMenuState(true)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </header>
      <div
        className={classnames(styles.menu, menuState ? styles.showMenu : '')}
        sx={{ bg: 'blue.primary', color: 'white', zIndex: 'cover', p: [4, 0] }}
      >
        <div
          className={styles.menuWrapper}
          sx={{ maxWidth: 'maxWidth', mx: 'auto', pt: [4, 10], flexDirection: ['column', 'row'], position: 'relative' }}
        >
          <ul className={styles.mainMenu} sx={{ width: ['auto', '40%'], variant: ['texts.h3', 'texts.h2'] }}>
            {JSONData.map((item, index) => (
              <li key={index} onMouseEnter={() => setCurrent(index)}>
                <Link sx={{ variant: 'hovers.orange3' }} to={item.path} onClick={() => setMenuState(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.subMenu} sx={{ display: ['none', 'block'], variant: 'texts.subtitle1' }}>
            {JSONData[current]?.children.length
              ? JSONData[current]?.children.map((item, index) => (
                  <li key={index}>
                    <Link sx={{ variant: 'hovers.orange3' }} to={item.path} onClick={() => setMenuState(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
          <ul sx={{ variant: 'texts.h5', display: 'flex', flexDirection: 'column' }}>
            <li>
              <Link sx={{ variant: 'hovers.orange3' }} to='/joinus' onClick={() => setMenuState(false)}>
                加入我們
              </Link>
            </li>
            <li>
              <Link sx={{ variant: 'hovers.orange3' }} to='/contactus' onClick={() => setMenuState(false)}>
                聯絡我們
              </Link>
            </li>
            <li sx={{ marginTop: 'auto' }}>
              <Social />
            </li>
          </ul>
          <div
            className={styles.closeBtn}
            sx={{
              top: [-1, 3],
              right: [-2, 0],
              variant: 'buttons.iconSmall',
              zIndex: 'overCover',
              position: 'absolute',
            }}
            onClick={() => setMenuState(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
