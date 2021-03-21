/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { withPrefix } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Video from '/src/components/video';
import EntryBox from '/src/components/EntryBox/EntryBox';
import styles from './take2introduction.module.css';
import MenuData from '/src/data/menu.json';
import TeamInfoData from '/src/data/teamInfo.json';

const IntroductionPage = ({ location }) => {
  const [curMenu, setCurMenu] = useState([]);
  useEffect(() => {
    setCurMenu(MenuData.find((menu) => menu.path === withPrefix(location.pathname))?.children || []);
  }, [location.pathname]);
  return (
    <div className={styles.wrapper} sx={{ variant: 'gradients.blue2' }}>
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
              flexGrow: 1,
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
      <section
        id={curMenu[0]?.id}
        sx={{ mx: 'auto', maxWidth: 'maxWidth', color: 'white', variant: 'texts.body1', px: [2, 0] }}
      >
        <p>
          得易健康有限公司 (Take2 Health)
          致力於探索、開發和建立開拓性的醫療健康平台，藉此運用生物醫學科技及信息技術，讓大眾掌握具實用價值的健康資訊及新科技應用。Take2
          Health 致力推動醫療健康發展，讓最創新的醫療健康技術發明在中國以及亞洲其他地區造福普羅大眾。
        </p>
      </section>
      <section id={curMenu[1]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', color: 'white', px: [2, 0] }}>
        <h1
          sx={{
            variant: ['texts.h3', 'texts.h2'],
            textAlign: 'center',
            my: 6,
          }}
        >
          品牌故事
        </h1>
        <div sx={{ variant: 'texts.body1' }}>
          <p>
            我們深信科研能改變世界。與世界共享科研碩果，攜手參與建設更健康的社會，並讓未來不再有人因太遲得悉自己患癌而無法治癒，是Take2
            Prophecy™ 不斷追求以實現的美好願景。
          </p>
          <p>
            由香港著名生物科學專家研發，Take2 Prophecy™
            是擁有世界頂尖癌症基因分析技術——「無創早期鼻咽癌篩查」的先驅者。利用次世代DNA測序(NGS: Next-generation
            Sequencing)，及首創的數據分析技術，配合過萬人的臨床驗證數據庫比對，即使未見明顯病徵，也能及早找出早期患者，從而儘早規劃治療，提高治癒機會，節省醫療開支，讓患者更積極擁抱健康人生。
          </p>
          <p>
            我們明白消費者及專業醫護人員，對高質量醫療產品的渴求。憑著對尖端醫療科技不懈追求，我們會與大眾攜手向未來邁步前行
            —— 讓每一個人在享用最新科技的同時，共同建設因科研變得更美好、更健康的社會。
          </p>
          <p>期望人人有「鼻」無患，一呼一吸都能感受生命的美好。</p>
        </div>
        <div sx={{ maxWidth: '960px', mx: 'auto', mb: 6 }}>
          <Video
            videoSrcURL='https://www.youtube.com/embed/ph8uceFASzA?wmode=transparent&autoplay=0'
            videoTitle='Cool Youtube Videoe'
          />
        </div>
      </section>
      <section
        className={styles.teammainSetion}
        id={curMenu[2]?.id}
        sx={{
          color: 'white',
          backgroundPosition: ['top center', 'center center'],
          backgroundSize: ['200%', 'auto'],
          pt: [12, 7],
          pb: [4, 7],
        }}
      >
        <div className={styles.teammainWrapper} sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
          <h2 sx={{ variant: ['texts.h3', 'texts.h2'], textAlign: ['center', 'left'] }}>團隊使命</h2>
          <div sx={{ variant: 'texts.body1', width: ['100%', '50%'], px: [2, 0] }}>
            <p>
              我們承諾竭力為您和家人的健康帶來無微不至的關愛，猶如迎著朝陽，晨光萬丈，溫暖無比；而我們的承諾不止於此。當你享受優越醫療服務的同時，既能見證我們對尖端科技的極致追求，更能共同參與建設因科技創新變得更美好的社會。誠邀您結伴同行，對健康運籌帷幄，一起開創健康人生，展現光輝未來。
            </p>
            <p sx={{ fontWeight: 'bold' }}>Tony Yung</p>
            <p>CEO</p>
          </div>
        </div>
      </section>
      <section id={curMenu[3]?.id} sx={{ color: 'white', overflow: 'hidden' }}>
        <h2 sx={{ variant: ['texts.h3', 'texts.h2'], textAlign: 'center', py: 6, mb: 0 }}>{TeamInfoData.title}</h2>
        {TeamInfoData.data.map((item, index) => (
          <EntryBox key={item.name} direction={index % 2 === 0 ? 'left' : 'right'}>
            <div
              className={styles.teamCardWrapper}
              sx={
                index % 2 === 0
                  ? {
                      flexDirection: ['column-reverse', 'row-reverse'],
                      justifyContent: 'flex-right',
                      bg: 'blue.muted1',
                    }
                  : {
                      flexDirection: ['column-reverse', 'row'],
                      justifyContent: 'flex-left',
                      backgroundImage:
                        index === TeamInfoData.data.length - 1
                          ? 'radial-gradient(circle at left top, rgb(146, 183, 202) 65%, rgba(255, 255, 255, 0) 100%), url("https://www.prophecy.health/wp-content/uploads/2020/09/quota.png")'
                          : 'url("https://www.prophecy.health/wp-content/uploads/2020/09/quota.png")',
                    }
              }
            >
              <div
                className={styles.teamCardImg}
                sx={{
                  width: ['96%', '40%'],
                  height: ['188px', 'auto'],
                  mx: ['2%', 0],
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: item.position,
                }}
              />
              <div
                className={styles.teamCardContent}
                sx={{ maxWidth: ['100%', '46%'], mx: 4, alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
              >
                <h2 sx={{ variant: 'texts.h3', mx: ['auto', 0], pt: [2, 0] }}>{item.name}</h2>
                <div sx={{ variant: 'texts.body1' }}>
                  <p sx={{ width: '60%', mx: 'auto', textAlign: 'center' }}>{item.title}</p>
                  <p>{item.words}</p>
                </div>
              </div>
            </div>
          </EntryBox>
        ))}
      </section>
    </div>
  );
};

export default IntroductionPage;
