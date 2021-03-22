/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, Input, Checkbox } from 'theme-ui';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ProphecySteps from '/src/components/ProphecySteps/ProphecySteps';
import PostCard from '../components/PostCard/PostCard';
import Swiper from 'react-id-swiper';
import styles from './index.module.css';
import 'swiper/swiper-bundle.min.css';

import HomeVideo from '../assets/videos/home_video_3.mp4';
import mouseButton from '../assets/images/download.png';

export const query = graphql`
  query {
    healthInfo: allHealthInfoJson {
      nodes {
        image
        id
        path
        title
        auth
        date
      }
    }
    moreInfo: allMoreInfoJson {
      nodes {
        id
        image
        gif
        title
      }
    }
    activityInfo: allActivityInfoJson {
      nodes {
        image
        id
        path
        title
        auth
        date
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const [playingGif, setPlayingGif] = useState(null);

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: 30,
    containerClass: styles.containerWrapper,
    wrapperClass: styles.swiperWrapper,
  };
  return (
    <>
      <div className={styles.slidersContainer}>
        <video className={styles.videoItem} autoPlay loop muted playsInline>
          <source src={HomeVideo} type='video/mp4' />
        </video>
        <img
          className={styles.mouseButton}
          sx={{ zIndex: 'base' }}
          onClick={() => scrollTo('#main')}
          src={mouseButton}
          alt=''
        />
        <div className={styles.introWrapper} sx={{ mx: 'auto', maxWidth: 'maxWidth', width: '100%' }}>
          <div
            className={styles.introInner}
            sx={{
              width: ['100%', '40%'],
              variant: 'gradients.blue1',
              py: 3,
              pl: 3,
              pr: 4,
            }}
          >
            <Link to='/take2prophecy' sx={{ color: 'white', textDecoration: 'none' }}>
              <h2 sx={{ variant: 'texts.h2' }}>
                <span sx={{ variant: 'texts.h3' }}>Take2 Prophecy™</span>
                <br />
                無創早期鼻咽癌篩查
              </h2>
              <p sx={{ variant: 'texts.body2' }}>
                利用嶄新次世代DNA測序分析技術（NGS: Next-generation
                Sequencing），經世界頂尖大學研究團隊反覆測試和大規模臨床研究證實，能有效發現早期鼻咽癌患者，即使沒有明顯病徵，都能「預早知
                ‧ 越早醫」。讓大家擁抱健康，一呼一吸都能感受生命的美好。
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div id='main' className={styles.main} sx={{ color: 'white', variant: 'gradients.blue2' }}>
        <div className={styles.wrapper}>
          <section>
            <ProphecySteps />
          </section>
          <section>
            <div className={styles.secTitle}>
              <h2 sx={{ variant: 'texts.h2' }}>最新活動推廣</h2>
              <p sx={{ variant: 'texts.body1' }}>了解最新活動推廣，包括與各大專業機構的健康服務合作。</p>
            </div>
            <Swiper {...params}>
              {data.activityInfo.nodes.map((item) => (
                <PostCard key={item.id} {...item} />
              ))}
            </Swiper>
          </section>
          <section>
            <div className={styles.secTitle}>
              <h2 sx={{ variant: 'texts.h2' }}>健康資訊</h2>
              <p sx={{ variant: 'texts.body1' }}>緊貼最新健康資訊，提高個人生活質素。</p>
            </div>
            <div className={styles.postsWrapper} sx={{ flexWrap: ['wrap', 'nowrap'] }}>
              <div className={styles.postsLeft} sx={{ mr: [0, 3], mb: [4, 0] }}>
                <PostCard
                  className={styles.largePostCard}
                  key={data.healthInfo.nodes[0].id}
                  {...data.healthInfo.nodes[0]}
                />
              </div>
              <div
                className={styles.postsRight}
                sx={{
                  width: ['100%', '32%'],
                }}
              >
                {data.healthInfo.nodes.map((item, index) =>
                  index ? <PostCard className={styles.postCard} key={item.id} {...item} sx={{ mb: [4, 0] }} /> : null,
                )}
              </div>
            </div>
          </section>
        </div>
        <section className={styles.locationInfo}>
          <div className={styles.secTitle}>
            <h2 sx={{ variant: 'texts.h2' }}>服務覆蓋點</h2>
            <p sx={{ variant: 'texts.body1' }}>Take2 Prophecy™ 測試遍佈港九新界及離島，立即查看最近您的服務地點。</p>
            <Link
              to='/findourservices'
              className={styles.checkLocation}
              sx={{ color: 'white', textDecoration: 'none' }}
            >
              查看地址
            </Link>
          </div>
        </section>
        <section className={styles.moreInfo}>
          <div className={styles.moreInfoWrapper}>
            <div className={styles.moreInfoContent} sx={{ width: ['auto', '40%'], mx: [3, 0] }}>
              <div className={styles.secTitle}>
                <h2 sx={{ variant: 'texts.h2' }}>探索更多</h2>
                <p sx={{ variant: 'texts.body1' }}>
                  Take2 Prophecy™
                  致力為您打造健康人生，分享與健康相關的最新資訊，讓大眾正確認識鼻咽癌，並助您安排專業早期鼻咽癌篩查服務。
                </p>
              </div>
              <div className={styles.moreList} sx={{ mx: [3, 0] }}>
                {data.moreInfo.nodes.map((item, index) => (
                  <div className={styles.moreItem} key={item.id}>
                    <img
                      src={playingGif === index ? item.gif : item.image}
                      alt=''
                      onMouseEnter={() => setPlayingGif(index)}
                      onMouseLeave={() => setPlayingGif(null)}
                    />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.bookNews} sx={{ bg: 'white', px: [1, 0] }}>
          <div sx={{ color: 'blue.primaryText', maxWidth: 'maxWidth', mx: 'auto', py: [6, 10] }}>
            <h2 sx={{ variant: ['texts.h3', 'texts.h2'] }}>訂閱最新資訊</h2>
            <p sx={{ variant: 'texts.body1' }}>關愛自己及家人，立即訂閱，獲取健康資訊。</p>
            <form action=''>
              <div sx={{ mb: 2, display: 'flex', maxWidth: '800px' }}>
                <Input
                  name='email'
                  placeholder='邮箱地址'
                  sx={{
                    variant: 'form.input',
                    color: 'gray.secondary',
                    borderColor: 'gray.muted1',
                    fontSize: 1,
                    py: 2,
                  }}
                />
                <div
                  sx={{
                    variant: 'buttons.iconNormal',
                    height: 'auto',
                    bg: 'blue.primaryText',
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </div>
              </div>
              <div
                sx={{
                  variant: 'texts.caption',
                  color: 'gray.muted2',
                  display: 'flex',
                  alignItems: 'center',
                  mt: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Checkbox name='agree' defaultChecked={false} sx={{ mr: 1 }} />
                本人已明白及同意Take2 Health Limited 的網站於www.prophecy.health之
                <Link to='/docs/post1/' sx={{ color: 'gray.muted2', variant: 'text.link2' }}>
                  網站私隱政策
                </Link>
                及
                <Link to='/docs/post2' sx={{ color: 'gray.muted2', variant: 'text.link2' }}>
                  個人資料收集聲明
                </Link>
                。
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default IndexPage;
