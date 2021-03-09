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
      <section id={curMenu[1]?.id} sx={{ bg: 'primary', py: 8, color: 'text' }}>
        <div sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
          <div sx={{ textAlign: 'center', mb: 6 }}>
            <div sx={{ fontSize: 5, mb: 4 }}>{ServiceAreaData.title}</div>
            <div sx={{ fontSize: 3 }}>{ServiceAreaData.description}</div>
          </div>
          <div sx={{ display: 'flex' }}>
            {ServiceAreaData.data.map((item, index) => (
              <div
                className={index === curArea ? styles.activeArea : ''}
                key={item.area}
                onClick={() => setCurArea(index)}
                sx={{ position: 'relative', fontSize: 3, py: 2, fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}
              >
                {item.area}
              </div>
            ))}
          </div>
          <div sx={{ mt: 6, maxHeight: '400px', overflowX: 'auto' }}>
            <table sx={{ fontSize: 3 }}>
              <tbody>
                {ServiceAreaData.data[curArea].list.map((service, index) => (
                  <tr key={`${curArea}_${index}_${service.name}`} className={styles.tableRow}>
                    <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                      {service.name}
                    </td>
                    <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                      {service.location}
                    </td>
                    <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                      {service.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default introductionPage;
