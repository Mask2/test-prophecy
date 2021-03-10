/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';

import styles from './ProphecySteps.module.css';

const ProphecySteps = () => {
  const [current, setCurrent] = useState(0);
  const data = useStaticQuery(graphql`
    query {
      allProphecyStepsJson {
        nodes {
          id
          title
          content
          video
        }
      }
    }
  `);
  return (
    <>
      <div sx={{ py: 6, textAlign: 'center' }}>
        <h1>篩查四部曲</h1>
        <p>透過簡單篩查四部曲，讓人人有「鼻」無患，提高成功治愈鼻咽癌的機會。</p>
      </div>
      <div className={styles.wrapper} sx={{ flexDirection: ['column', 'row'] }}>
        {data.allProphecyStepsJson.nodes.map((item, index) => (
          <div
            key={item.id}
            className={styles.stepCard}
            onMouseEnter={() => setCurrent(index)}
            onMouseLeave={() => setCurrent(null)}
            sx={{ width: ['100%', '25%'], height: ['360px', '500px'] }}
          >
            <div className={classnames(styles.videoWrapper, current === index ? styles.active : '')}>
              <video className={styles.videoItem} autoPlay loop muted playsInline>
                <source src={item.video} type='video/mp4' />
              </video>
            </div>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.content}>{item.content}</p>
          </div>
        ))}
      </div>
      <div
        className={styles.prophecyResult}
        sx={{ width: ['auto', 'calc(66.666666666667% - ((4% + 4%) * 0.66666666666667))'], mx: [3, 'auto'] }}
      >
        <p>*陽性：檢測到血漿中存在｢與鼻咽癌相關的人類和EB病毒DNA特徵｣，詳情請向醫護人員查詢。</p>
        <p>*陰性：檢測不到血漿中存在｢與鼻咽癌相關的人類和EB病毒DNA特徵｣，詳情請向醫護人員查詢。</p>
      </div>
    </>
  );
};

export default ProphecySteps;
