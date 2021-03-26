/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { withPrefix } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styles from './findourservices.module.css';
import MenuData from '/src/data/menu.json';
import ServiceAreaData from '/src/data/serviceArea.json';
import partnerData from '/src/data/partnerInfo.json';

const FindourservicesPage = ({ location }) => {
  const [curMenu, setCurMenu] = useState([]);
  const [curArea, setCurArea] = useState(0);
  useEffect(() => {
    setCurMenu(MenuData.find((menu) => location.pathname === withPrefix(menu.path))?.children || []);
  }, [location.pathname]);
  return (
    <div sx={{ bg: 'blue.secondary' }}>
      <div
        sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', py: 6, mx: 'auto', maxWidth: 'maxWidth' }}
      >
        {curMenu.map((child) => (
          <div
            key={child.path}
            sx={{
              variant: 'hovers.orange1',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 2,
              fontWeight: 'bold',
              mx: [1, 4],
              mb: [3, 6],
              boxShadow: 'button',
              width: ['100%', 'auto'],
            }}
            onClick={() => {
              scrollTo(`#${child.id}`);
            }}
          >
            {child.name}
          </div>
        ))}
      </div>
      <section id={curMenu[0]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', py: 6 }}>
        <h2 sx={{ color: 'white', textAlign: 'center', variant: ['texts.h3', 'texts.h2'] }}>{partnerData.title}</h2>
        <div className={styles.partnerWrapper} sx={{ pt: [4, 7], pb: [4, 8], flexWrap: 'wrap' }}>
          {partnerData.data.map((item) => (
            <div
              className={styles.partnerCard}
              key={item.name}
              sx={{ width: ['50%', '25%'], pt: ['50%', '25%'], m: [4, 0] }}
            >
              <div className={styles.partnerFont}>
                <img className={styles.partnerFontImg} src={item.img} alt='' />
              </div>
              <div
                className={styles.partnerBack}
                sx={{ variant: 'gradients.orange1', fontSize: 2, color: 'white', p: [1, 4], textAlign: 'center' }}
              >
                <div sx={{ mb: 3, variant: ['texts.body2', 'texts.body1'] }}>{item.name}</div>
                <div sx={{ variant: ['texts.overline', 'texts.body1'] }}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id={curMenu[1]?.id} sx={{ bg: 'blue.primary', py: 8, color: 'white' }}>
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
                sx={{
                  position: 'relative',
                  variant: ['texts.body2', 'texts.body1'],
                  py: 2,
                  fontWeight: 'bold',
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                {item.area}
              </div>
            ))}
          </div>
          <div sx={{ mt: 6, maxHeight: '400px', overflowX: 'auto' }}>
            <table sx={{ fontSize: 3, borderTop: '1px solid #dcdcdc' }}>
              <tbody>
                {ServiceAreaData.data[curArea].list.map((service, index) => (
                  <tr
                    key={`${curArea}_${index}_${service.name}`}
                    className={styles.tableRow}
                    sx={{ variant: 'hovers.orange2', height: 'trHeight' }}
                  >
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

export default FindourservicesPage;
