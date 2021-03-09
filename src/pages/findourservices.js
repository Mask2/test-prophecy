/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { withPrefix } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styles from './findourservices.module.css';
import HoverBox from '/src/components/HoverBox/HoverBox';
import MenusData from '/src/data/menu.json';
import ServiceAreaData from '/src/data/serviceArea.json';

const introductionPage = ({ location }) => {
  const [curMenu, setCurMenu] = useState([]);
  const [curArea, setCurArea] = useState(0);
  useEffect(() => {
    setCurMenu(MenusData.find((menu) => menu.path === withPrefix(location.pathname))?.children || []);
  }, [location.pathname]);
  return (
    <div className={styles.wrapper} sx={{ backgroundImage: 'gradientMuted' }}>
      <div sx={{ display: 'flex', justifyContent: 'center', py: 6, mx: 'auto', maxWidth: 'maxWidth' }}>
        {curMenu.map((child) => (
          <HoverBox
            key={child.path}
            sxx={{
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 2,
              fontWeight: 'bold',
              mx: 4,
              px: 9,
              boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              scrollTo(`#${child.id}`);
            }}
          >
            {child.name}
          </HoverBox>
        ))}
      </div>
      <section id={curMenu[0]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', height: '100vh' }}>
        test
      </section>
      <section id={curMenu[1]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
        <div className=''>{ServiceAreaData.title}</div>
        <div className=''>{ServiceAreaData.description}</div>
        <div>
          {ServiceAreaData.data.map((item, index) => (
            <div
              className={index === curArea ? styles.activeArea : ''}
              key={item.area}
              onClick={() => setCurArea(index)}
              sx={{ position: 'relative' }}
            >
              {item.area}
            </div>
          ))}
        </div>
        <table>
          <tbody>
            {ServiceAreaData.data[curArea].list.map((service) => (
              <tr key={service.name}>
                <td colSpan='1' rowSpan='1'>
                  <p>{service.name}</p>
                </td>
                <td colSpan='1' rowSpan='1'>
                  <p>{service.location}</p>
                </td>
                <td colSpan='1' rowSpan='1'>
                  <p>{service.phone}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default introductionPage;
