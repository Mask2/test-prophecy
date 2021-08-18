import React, { useState, useEffect, useRef } from 'react'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import YouTube from 'react-youtube'
import classnames from 'classnames'
// import { Waypoint } from 'react-waypoint'

import Ming01 from '../images/ming_01.png'
import Ming02 from '../images/ming_02.png'
import Ming03 from '../images/ming_03.png'
import MobileMing01 from '../images/mobile_ming_01.png'
import MobileMing02 from '../images/mobile_ming_02.png'
import MobileMing03 from '../images/mobile_ming_03.png'
import IconCalendar from '../images/svg/icon_calendar.svg'
import IconFavorite from '../images/svg/icon_favorite.svg'
import IconLocation from '../images/svg/icon_location.svg'
// import TemVideo from '../images/tem_video.png'
import LineDots from '../images/bg_line_dots.png'
import WaveDots from '../images/bg_wave_dots.png'
import CellTop from '../images/bg_cell_top.png'
import CellBottom from '../images/bg_cell_bottom.png'
import IconArrow from '../images/svg/icon_arrow.svg'
import Header from '../components/Header'

import {
  // menuListData,
  symptomListData,
  serviceListData,
} from '../utils/constant'
import Annotate from '../components/Annotate'
import { gsap, ScrollTrigger } from '../utils/initGsap'

import FlipCardsSwiper from '../components/FlipCardsSwiper'

// install Swiper modules

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.body1.fontFamily,
      overflowX: 'hidden',
    },
    sectionOne: {
      height: theme.spacing(90),
      background: theme.palette.background.main,
      position: 'relative',
      [theme.breakpoints.only('xs')]: {
        height: '140vw',
      },
    },
    sectionOneContainer: {
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
    },
    sectionOneInfo: {
      left: theme.spacing(2),
      bottom: theme.spacing(35),
      zIndex: 4,
      lineHeight: 2,
      fontWeight: '600',
      [theme.breakpoints.only('xs')]: {
        lineHeight: 1.4,
        fontWeight: '500',
        left: theme.spacing(2.5),
      },
    },
    sectionOneImg: {
      position: 'relative',
      zIndex: 3,
      marginTop: 'auto',
      display: 'block',
      maxHeight: '100%',
      [theme.breakpoints.only('xs')]: {
        width: '100%',
      },
    },
    sectionOneTitle: {
      left: 0,
      right: 0,
      textAlign: 'center',
      zIndex: 4,
      bottom: theme.spacing(10),
      fontSize: theme.typography.h1.fontSize,
      fontWeight: 'lighter',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h3.fontSize,
        bottom: theme.spacing(2.25),
      },
    },
    circle: {
      width: theme.spacing(49.25),
      height: theme.spacing(49.25),
      borderRadius: '50%',
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(56),
        height: theme.spacing(56),
      },
    },
    circleOne: {
      background: theme.palette.background.main124,
      left: theme.spacing(19),
      bottom: theme.spacing(-5),
      zIndex: '2',
      [theme.breakpoints.only('xs')]: {
        left: theme.spacing(-30),
        bottom: theme.spacing(-14.5),
      },
    },
    circleTwo: {
      background: theme.palette.background.main140,
      right: theme.spacing(21.5),
      bottom: theme.spacing(16),
      zIndex: '1',
      [theme.breakpoints.only('xs')]: {
        right: theme.spacing(-10),
        bottom: theme.spacing(-2),
      },
    },
    sectionTwo: {
      backgroundImage: `url(${WaveDots}),${theme.palette.background.dark}`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      backgroundPositionX: 'center',
      position: 'relative',
      zIndex: 10,
    },
    arrow: {
      display: 'block',
      width: theme.spacing(4),
    },
    arrowButton: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionThree: {
      background: theme.palette.background.light,
      position: 'relative',
    },
    sectionFour: {
      background: theme.palette.background.light,
      overflowX: 'hidden',
    },
    sectionFive: {
      background: theme.palette.background.light,
      position: 'relative',
    },
    sectionSix: {
      backgroundColor: theme.palette.background.default,
    },
    mingImage: {
      display: 'block',
      width: '100%',
    },
    sectionMotion: {
      position: 'absolute',
    },
    temVideo: {
      display: 'block',
      width: '100%',
    },
    sectionText: {
      fontSize: theme.typography.h3.fontSize,
      fontWeight: 'bolder',
      zIndex: 2,
      position: 'absolute',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h6.fontSize,
        letterSpacing: 2,
      },
    },
    symptomIcon: {
      display: 'block',
      mb: theme.spacing(2),
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(12.5),
      },
    },
    serviceWrapper: {
      backgroundImage: `url(${CellTop}),url(${CellBottom})`,
      backgroundRepeat: 'no-repeat,no-repeat',
      backgroundSize: '60%,70%',
      backgroundPositionY: 'top,bottom',
      backgroundPositionX: 'left,right',
      borderRadius: theme.spacing(1),
    },
    serviceCard: {
      display: 'block',
      height: theme.spacing(30),
      [theme.breakpoints.only('xs')]: {
        height: theme.spacing(18),
      },
    },
    footerTitle: {
      backgroundImage: `url(${LineDots})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      backgroundPositionX: 'right',
    },
    buttonRoot: {
      maxWidth: theme.spacing(37),
      borderRadius: theme.spacing(1),
      color: theme.palette.primary.light,
      borderColor: theme.palette.primary.light,
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 'bolder',
      marginRight: theme.spacing(2),
      [theme.breakpoints.only('xs')]: {
        marginBottom: theme.spacing(2),
        marginRight: 0,
      },
    },
    buttonOutlined: {
      '&:hover': {
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.light,
      },
    },
    iconRoot: {
      textAlign: 'center',
    },
    imageIcon: {
      height: '100%',
      display: 'block',
    },
  })
)

const App = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))
  const sectionOneRef = useRef(null)
  const flipCardsContainerRef = useRef(null)
  const [activeSection, setActiveSection] = useState('section-one')

  // section one parallax motion
  useEffect(() => {
    sectionOneRef.current &&
      gsap.to('.section-one-info', {
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-one-info',
          start: 'top center',
          end: 'bottom top',
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
      })
    gsap.to('.section-one-circle-one', {
      y: -400,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-one',
        start: 'top top',
        scrub: true,
      },
    })
    gsap.to('.section-one-circle-two', {
      y: -400,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-one',
        start: 'top top',
        scrub: true,
      },
    })
    gsap.to('.section-one-ming', {
      y: 400,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-one',
        scrub: true,
        start: 'top top',
      },
    })
  }, [sectionOneRef])

  // section two arrow motion
  useEffect(() => {
    const t1 = gsap.timeline()

    t1.fromTo('.arrow-one', { y: 12 }, { y: 32, duration: 1 })
      .fromTo(
        '.arrow-two',
        { scale: 1, opacity: 1 },
        {
          scale: 0.3,
          opacity: 0.6,
          duration: 1,
        },
        '<'
      )
      .repeat(-1)
  }, [])

  // section three text motion
  useEffect(() => {
    const t1 = gsap.timeline()
    t1.fromTo(
      // text one motion
      '.section-three-text-one-cover',
      { xPercent: -100 },
      { xPercent: -96, duration: 0.2 }
    )
      .fromTo(
        '.section-three-text-one',
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
      .to('.section-three-text-one-cover', { xPercent: 0, duration: 0.2 }, '<')
      .to(
        '.section-three-text-one-cover',
        { xPercent: -96, duration: 0.2 },
        '<0.2'
      )
      .to(
        '.section-three-text-one-cover',
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.2,
        },
        '<0.2'
      )
      .fromTo(
        // text two motion
        '.section-three-text-two-cover',
        { xPercent: -100 },
        { xPercent: -96, duration: 0.2 },
        '<-0.2'
      )
      .fromTo(
        '.section-three-text-two',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '<'
      )
      .to('.section-three-text-two-cover', { xPercent: 0, duration: 0.2 }, '<')
      .to(
        '.section-three-text-two-cover',
        { xPercent: -96, duration: 0.2 },
        '<0.2'
      )
      .to(
        '.section-three-text-two-cover',
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.2,
        },
        '<0.2'
      )

    ScrollTrigger.create({
      trigger: '.section-three',
      animation: t1,
      start: 'top 40%',
      toggleActions: 'play none none none',
      once: true,
      // scrub: true,
      // markers: true,
    })
  }, [])

  // section four flip cards motion
  useEffect(() => {
    // let flipCards = gsap.utils.toArray('.flip-card')
    // gsap.to(flipCards, {
    //   x: -400 * (flipCards.length - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.flip-cards-container',
    //     pin: true,
    //     scrub: true,
    //     // snap: 1 / (flipCards.length - 1),
    //     start: 'center center',
    //     end: () => `end +=${flipCardsContainerRef.current.offsetHeight}`,
    //     pinSpacing: false,
    //     markers: true,
    //   },
    // })
    // const t1 = gsap.timeline(flipCards, {
    //   scrollTrigger: {
    //     trigger: '.section-four',
    //     pin: true,
    //     scrub: true,
    //     start: 'top 200px',
    //     end: '+=398',
    //     pinSpacing: false,
    //     // markers: true,
    //   },
    // })
    // flipCards.forEach((flipCard) => {
    //   t1.fromTo(flipCard, { rotateY: 0 }, { rotateY: 180, duration: 1 })
    //     .to('.flip-cards-container', { x: '-=398', duration: 2 })
    //     .fromTo(flipCard, { rotateY: 180 }, { rotateY: 0, duration: 1 })
    // })
  }, [])

  // section five text motion
  useEffect(() => {
    const t1 = gsap.timeline()
    t1.fromTo(
      '.section-five-text-one-line',
      { xPercent: -100 },
      { xPercent: 0, duration: 1 }
    ).fromTo(
      '.section-five-text-two-line',
      { xPercent: 100 },
      { xPercent: 0, duration: 1 },
      '<'
    )

    ScrollTrigger.create({
      trigger: '.section-five-text-one-line',
      start: 'top center',
      animation: t1,
      toggleActions: 'play none none none',
      once: true,
      // scrub: true,
      // markers: true,
    })
  }, [])

  // section six symptoms fade in motion
  useEffect(() => {
    const symptomsFadeIn = gsap.fromTo(
      '.symptom-card',
      { autoAlpha: 0, y: 100 },
      { duration: 1, autoAlpha: 1, y: 0, stagger: 0.6 }
    )
    ScrollTrigger.create({
      trigger: '.symptom-card-wrapper',
      animation: symptomsFadeIn,
      start: 'top center',
      toggleActions: 'play none none none',
      once: true,
    })
  }, [])

  // section six services fade in motion
  useEffect(() => {
    const servicesFadeIn = gsap.fromTo(
      '.service-card',
      { autoAlpha: 0, y: -50 },
      { duration: 0.6, autoAlpha: 1, y: 0, stagger: 0.3 }
    )
    ScrollTrigger.create({
      trigger: '.service-card-wrapper',
      animation: servicesFadeIn,
      start: 'top center',
      toggleActions: 'play none none none',
      once: true,
      // markers: true,
    })
  }, [])

  const symptoms = (params) =>
    symptomListData.map((symptom) => (
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        key={symptom.label}
        className='symptom-card'
      >
        <img
          className={classes.symptomIcon}
          src={symptom.icon}
          alt={symptom.label}
        />
        <Typography component='div'>
          <Box
            fontSize={matches ? 'body1.fontSize' : 'h6.fontSize'}
            fontWeight='fontWeightBold'
            color='text.primary'
          >
            {symptom.label}
          </Box>
        </Typography>
      </Box>
    ))

  return (
    <>
      <Header active={activeSection}>{activeSection}</Header>
      <Box className={classes.root}>
        {/* {setWaypoint(0)} */}
        <Box className={classnames(classes.sectionOne, 'section-one')}>
          <Container className={classes.sectionOneContainer} maxWidth='lg'>
            <Typography
              ref={sectionOneRef}
              className={classnames(
                classes.sectionMotion,
                classes.sectionOneInfo,
                'section-one-info'
              )}
              component='div'
            >
              <Box
                fontSize='h6.fontSize'
                color='primary.contrastText'
                letterSpacing='1px'
              >
                張達明
                <br />
                鼻咽癌康復者」
                <br />
                早期鼻咽癌存活率：
                {matches ? (
                  <Box fontSize='h5.fontSize' component='div' fontWeight='600'>
                    90%+
                  </Box>
                ) : (
                  <Box fontSize='h5.fontSize' component='span'>
                    90%+
                  </Box>
                )}
              </Box>
            </Typography>
            <Box
              className={classnames(
                classes.sectionMotion,
                classes.circle,
                classes.circleOne,
                'section-one-circle-one'
              )}
            ></Box>
            <Box
              className={classnames(
                classes.sectionMotion,
                classes.circle,
                classes.circleTwo,
                'section-one-circle-two'
              )}
            ></Box>
            <img
              className={classnames(classes.sectionOneImg, 'section-one-ming')}
              src={matches ? MobileMing01 : Ming01}
              alt='Cheung Tat Ming 01'
            />
            <Box
              className={classnames(
                classes.sectionMotion,
                classes.sectionOneTitle
              )}
              color='primary.contrastText'
            >
              GO LIVE AGAIN
            </Box>
          </Container>
        </Box>
        {/* {setWaypoint(1)} */}
        <Box
          className={classnames(classes.sectionTwo, 'section-two')}
          pb={matches ? 7.5 : 15}
          pt={matches ? 3 : 6}
        >
          <Box
            mb={matches ? 3 : 6}
            className={classes.arrowButton}
            onClick={() =>
              gsap.to(window, { duration: 1, scrollTo: `.section-two` })
            }
          >
            <img
              className={classnames(classes.arrow, 'arrow-one')}
              src={IconArrow}
              alt='arrow'
            />
            <img
              className={classnames(classes.arrow, 'arrow-two')}
              src={IconArrow}
              alt='arrow'
            />
          </Box>
          <Container maxWidth='sm'>
            <Box
              fontSize='subtitle1.fontSize'
              fontWeight='fontWeightLight'
              color='primary.contrastText'
              component='p'
              lineHeight={2}
            >
              根據世界衛生組織2018年的數據顯示，香港鼻咽癌發病率是世界主要城市的5-6倍¹。
              <br />
              {matches && <br />}
              其實不論年紀、性別及背景，任何人士都有機會患上鼻咽癌。
              <br />
              {matches && <br />}
              作為鼻咽癌康復者兼香港著名喜劇演員，張達明先生曾因忽略身體警號而延誤求醫。
              <br />
              {matches && <br />}
              想掌握健康，即使不幸患癌都能積極開展第二人生?
              <br />
              {matches && <br />}
              觀看以下影片，由達明親述進行「早期鼻咽癌篩查」的重要性！
            </Box>
            <Box mt={matches ? 3 : 8}>
              <YouTube
                videoId='ph8uceFASzA'
                opts={{
                  width: '100%',
                }}
              />
            </Box>
          </Container>
        </Box>
        {/* {setWaypoint(2)} */}
        <Box className={classnames(classes.sectionThree, 'section-three')}>
          <img
            className={classes.mingImage}
            src={matches ? MobileMing02 : Ming02}
            alt='Cheung Tat Ming 02'
          />
          <Box
            left={matches ? '5%' : '18%'}
            bottom={matches ? '44%' : '40%'}
            color='background.secondaryLight'
            className={classes.sectionText}
            px={2}
          >
            <div className='section-three-text-one'>鼻咽癌</div>
            <Box
              position='absolute'
              left='0'
              top='0'
              bottom='0'
              right='0'
              bgcolor='background.secondaryLight'
              className='section-three-text-one-cover'
            ></Box>
          </Box>
          <Box
            right={matches ? '8%' : '18%'}
            bottom={matches ? '44%' : '40%'}
            color='primary.contrastText'
            className={classes.sectionText}
            px={2}
          >
            <div className='section-three-text-two'>真的離你很遠？</div>
            <Box
              position='absolute'
              left='0'
              top='0'
              bottom='0'
              right='0'
              bgcolor='background.paper'
              className='section-three-text-two-cover'
            ></Box>
          </Box>
        </Box>
        {/* {setWaypoint(3)} */}
        <Box
          className={classnames(classes.sectionFour, 'section-four')}
          py={matches ? 0 : 7}
        >
          <Container maxWidth='sm'>
            <Box
              fontSize={matches ? 'h6.fontSize' : 'h5.fontSize'}
              fontWeight='fontWeightBold'
              color='primary.contrastText'
              component='h5'
            >
              鼻咽癌又稱「廣東癌」
            </Box>
            <Box
              fontSize='body2.fontSize'
              fontWeight='fontWeightLight'
              lineHeight={2}
              color='primary.contrastText'
              mt={matches ? 3 : 4}
              component='p'
            >
              鼻咽癌的高發地區為東南亞和南中國。當中在香港、廣東和廣西的發病率特別高，因此也被稱為「廣東癌」。本港每年有六百至八百宗鼻咽癌病例，因此鼻咽癌是不可忽視的十大癌症之一，它更是過去十年間45-64歲男士五大常見癌症之一²。
            </Box>
          </Container>
          <Box>
            <Box
              fontSize={matches ? 'h6.fontSize' : 'h4.fontSize'}
              fontWeight='fontWeightBold'
              color='primary.contrastText'
              component='h4'
              textAlign='center'
            >
              齊來認清真相!
            </Box>
            <Box
              className='flip-cards-container'
              display='flex'
              ref={flipCardsContainerRef}
            >
              {/* <FlipCards></FlipCards> */}
              <FlipCardsSwiper></FlipCardsSwiper>
            </Box>
          </Box>
        </Box>
        {/* {setWaypoint(4)} */}
        <Box className={classnames(classes.sectionFive, 'section-five')}>
          <img
            className={classes.mingImage}
            src={matches ? MobileMing03 : Ming03}
            alt='Cheung Tat Ming 03'
          />
          <Box
            className={classnames(classes.sectionText, classes.sectionFiveText)}
            left='13%'
            bottom='48%'
            color='primary.contrastText'
          >
            鼻咽癌不能「預防」
            <Box
              width='100%'
              height={matches ? 4 : 8}
              mt={1}
              bgcolor='secondary.main'
              className='section-five-text-one-line'
            ></Box>
          </Box>
          <Box
            className={classnames(classes.sectionText, classes.sectionFiveText)}
            right='10%'
            bottom='24%'
            color='primary.contrastText'
          >
            卻能「提防」
            <Box
              width='100%'
              height={matches ? 4 : 8}
              mt={1}
              bgcolor='secondary.main'
              className='section-five-text-two-line'
            ></Box>
          </Box>
        </Box>
        {/* {setWaypoint(5)} */}
        <Box
          className={classnames(classes.sectionSix, 'section-six')}
          py={matches ? 4 : 10}
        >
          <Container maxWidth='md'>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography component='div'>
                <Box
                  fontSize='body1.fontSize'
                  fontWeight='fontWeightLight'
                  textAlign={matches ? 'left' : 'center'}
                  color='primary.contrastText'
                >
                  鼻咽癌的症狀容易與傷風感冒混淆而令人忽略，80%患者在初診時已是晚期⁷。
                </Box>
                <Box
                  fontSize={matches ? 'h6.fontSize' : 'h5.fontSize'}
                  fontWeight='fontWeightBold'
                  color='primary.contrastText'
                  textAlign={matches ? 'left' : 'center'}
                  mt={3}
                >
                  鼻咽癌與感冒相似的徵狀包括：
                </Box>
              </Typography>
              <Box display='flex' mt={2} className='symptom-card-wrapper'>
                {symptoms()}
              </Box>
              <Typography component='div'>
                <Box
                  fontSize={matches ? 'h6.fontSize' : 'h5.fontSize'}
                  fontWeight='fontWeightBold'
                  color='primary.contrastText'
                  textAlign={matches ? 'left' : 'center'}
                  mt={matches ? 3 : 10}
                >
                  怎樣才能「提防」患癌？
                </Box>
                <Box
                  fontSize='body1.fontSize'
                  fontWeight='fontWeightLight'
                  textAlign={matches ? 'left' : 'center'}
                  color='primary.contrastText'
                  lineHeight={matches ? 1.5 : 3}
                  mt={matches ? 2 : 3}
                >
                  研究顯示，進行早期鼻咽癌篩查能有效找出「隱形」患者，
                  儘早接受適當治療，
                  <br />
                  令患者存活率可高達9成⁸。
                </Box>
              </Typography>
              <Box
                className={classes.serviceWrapper}
                py={matches ? 2 : 10}
                pb={matches ? 6 : 10}
                px={matches ? 2 : 8}
                mt={8}
                my={matches ? 2 : 0}
                bgcolor='background.paper'
              >
                <Typography component='div'>
                  <Box
                    fontSize={matches ? 'h6.fontSize' : 'h4.fontSize'}
                    fontWeight='fontWeightBold'
                    color='text.secondary'
                  >
                    Take2 Prophecy™
                  </Box>
                  <Box
                    fontSize={matches ? 'h6.fontSize' : 'h4.fontSize'}
                    fontWeight='fontWeightBold'
                    color='background.default'
                  >
                    早期鼻咽癌篩查服務特色
                  </Box>
                  <Box
                    mt={matches ? 2 : 4}
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='space-around'
                    className='service-card-wrapper'
                  >
                    {serviceListData.map((service) => (
                      <Box
                        key={service.label}
                        my={matches ? 1 : 2}
                        className='service-card'
                      >
                        <img
                          className={classes.serviceCard}
                          src={service.img}
                          alt={service.label}
                        />
                      </Box>
                    ))}
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        {/* {setWaypoint(6)} */}
        <footer>
          <Box
            bgcolor='primary.main'
            color='primary.contrastText'
            fontSize={matches ? 'h6.fontSize' : 'h5.fontSize'}
            fontWeight='fontWeightBold'
            py={matches ? 2 : 4}
            className={classnames(classes.footerTitle, 'section-seven')}
          >
            <Container maxWidth='lg'>聯繫我們</Container>
          </Box>
          <Box py={matches ? 4 : 6} pb={matches ? 6 : 10}>
            <Container maxWidth='lg'>
              <Typography component='div'>
                <Box
                  fontSize={matches ? 'h6.fontSize' : 'h5.fontSize'}
                  fontWeight='fontWeightBold'
                  color='text.hint'
                >
                  要掌握健康，就要立即行動！
                  <br />
                  歡迎透過下列方式與我們聯絡：
                </Box>
              </Typography>
              <Box
                width='100%'
                display={matches ? 'block' : 'flex'}
                my={matches ? 2 : 4}
              >
                <Button
                  classes={{
                    root: classes.buttonRoot,
                    outlined: classes.buttonOutlined,
                  }}
                  size='large'
                  variant='outlined'
                  fullWidth
                  startIcon={
                    <Icon classes={{ root: classes.iconRoot }}>
                      <img
                        className={classes.imageIcon}
                        src={IconCalendar}
                        alt='calendar'
                      />
                    </Icon>
                  }
                  href='https://api.whatsapp.com/send/?phone=85253770823&text=Halo%2C+I+want+to+know+more+about+Prophecy+Test%21+&app_absent=0'
                >
                  立即預約
                </Button>
                <Button
                  classes={{
                    root: classes.buttonRoot,
                    outlined: classes.buttonOutlined,
                  }}
                  size='large'
                  variant='outlined'
                  fullWidth
                  startIcon={
                    <Icon classes={{ root: classes.iconRoot }}>
                      <img
                        className={classes.imageIcon}
                        src={IconFavorite}
                        alt='favorite'
                      />
                    </Icon>
                  }
                  href='https://take2health.net/%e7%af%a9%e6%9f%a5%e6%9c%8d%e5%8b%99%e8%a6%86%e8%93%8b%e9%bb%9e/'
                >
                  查看服務覆蓋點
                </Button>
                {/* <Button
                  classes={{
                    root: classes.buttonRoot,
                    outlined: classes.buttonOutlined,
                  }}
                  size='large'
                  variant='outlined'
                  startIcon={
                    <Icon classes={{ root: classes.iconRoot }}>
                      <img
                        className={classes.imageIcon}
                        src={IconLocation}
                        alt='location'
                      />
                    </Icon>
                  }
                >
                  成為會員。
                </Button> */}
              </Box>
              <Typography component='div'>
                <Box
                  fontSize={
                    matches ? 'subtitle2.fontSize' : 'subtitle1.fontSize'
                  }
                  fontWeight={!matches && 'fontWeightBold'}
                  color='primary.light'
                  lineHeight={matches ? 2 : 3}
                >
                  聯絡資料
                </Box>
                <Box
                  fontSize='overline.fontSize'
                  fontWeight={!matches && 'fontWeightBold'}
                  lineHeight={2}
                  color='primary.light'
                >
                  電話: (852) 3613 0536
                  <br />
                  電郵: customer.support@take2.health
                  <br />
                  Facebook: Take2 Health
                  <br />
                  網站: take2health.net
                </Box>
              </Typography>
              <Box
                my={matches ? 4 : 6}
                bgcolor='text.disabled'
                height='1px'
              ></Box>
              <Annotate></Annotate>
            </Container>
          </Box>
        </footer>
      </Box>
    </>
  )
}

export default App
