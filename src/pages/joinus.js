/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { withPrefix } from 'gatsby';
import styles from './findourservices.module.css';
import MenuData from '/src/data/menu.json';
import JobsData from '/src/data/jobsInfo.json';

const FindourservicesPage = ({ location }) => {
  const [curMenu, setCurMenu] = useState([]);
  useEffect(() => {
    setCurMenu(MenuData.find((menu) => menu.path === withPrefix(location.pathname))?.children || []);
  }, [location.pathname]);
  return (
    <div sx={{ bg: 'blue.secondary' }}>
      <section
        id={curMenu[0]?.id}
        sx={{ mx: 'auto', maxWidth: 'maxWidth', py: 10, textAlign: 'center', color: 'white' }}
      >
        <p>
          Take2 Health
          Limited是一家總部位於中國香港的初創企業，致力於探索、開發和建立開拓性的醫療健康平台，藉此運用生物醫學科技及信息技術，讓大眾掌握可付諸於行動的健康咨詢及新科技應用。
          喜歡挑戰自我？
        </p>
        <p>厭倦沉悶工作環境？ 想成為生物科技界專才？ 想著手參與國際合作項目？</p>
      </section>
      <section id={curMenu[1]?.id} sx={{ bg: 'primary', color: 'white' }}>
        <div sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
          <div sx={{ textAlign: 'center', variant: 'texts.h2', fontWeight: 'light', mb: 8 }}>{JobsData.title}</div>
          <div sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {JobsData.areas.map((item, index) => (
              <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={`area_${index}`}>
                <img sx={{ width: 'icons.normal', height: 'icons.normal', display: 'block' }} src={item.icon} alt='' />
                <div sx={{ variant: 'texts.subtitle2', fontWeight: 'bold' }}>{item.area}</div>
              </div>
            ))}
          </div>
          <div sx={{ mt: 8, maxHeight: '400px', overflowX: 'auto' }}>
            <table sx={{ fontSize: 3, borderTop: '1px solid #dcdcdc' }}>
              <tbody>
                <tr className={styles.tableRow} sx={{ variant: 'hovers.orange2', height: 'trHeight' }}>
                  <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                    單位/部門
                  </td>
                  <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                    職位
                  </td>
                  <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                    日期
                  </td>
                  <td className={styles.tableCell} colSpan='1' rowSpan='1' />
                </tr>
                {JobsData.jobs.map((job, index) => (
                  <tr
                    key={`job_${index}`}
                    className={styles.tableRow}
                    sx={{ variant: 'hovers.orange2', height: 'trHeight' }}
                  >
                    <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                      {job.department}
                    </td>
                    <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                      {job.position}
                    </td>
                    <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                      {job.date}
                    </td>
                    <td className={styles.tableCell} colSpan='1' rowSpan='1'>
                      <a href='/src/assets/pdf/DMO_JD-1.pdf' target='_blank'>
                        <div sx={{ variant: 'buttons.normal' }}>查看详情</div>
                      </a>
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
