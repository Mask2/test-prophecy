import React, { useState, useLayoutEffect, useRef } from 'react'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import YouTube from 'react-youtube'
import classnames from 'classnames'

import Ming01 from '../images/ming_01.png'
import Ming02 from '../images/ming_02.png'
import Ming03 from '../images/ming_03.png'
import MobileMing01 from '../images/mobile_ming_01.png'
import MobileMing02 from '../images/mobile_ming_02.png'
import MobileMing03 from '../images/mobile_ming_03.png'
import SectionOneText01 from '../images/section_one_text_01.png'
import SectionOneText02 from '../images/section_one_text_02.png'
import SectionOneText03 from '../images/section_one_text_03.png'
import MobileSectionOneText01 from '../images/mobile_section_one_text_01.png'
import MobileSectionOneText02 from '../images/mobile_section_one_text_02.png'
import MobileSectionOneText03 from '../images/mobile_section_one_text_03.png'

import IconCalendar from '../images/svg/icon_calendar.svg'
import IconFavorite from '../images/svg/icon_favorite.svg'
// import IconLocation from '../images/svg/icon_location.svg'
// import TemVideo from '../images/tem_video.png'
import LineDots from '../images/bg_line_dots.png'
import WaveDots from '../images/bg_wave_dots.png'
import CellTop from '../images/bg_cell_top.png'
import CellBottom from '../images/bg_cell_bottom.png'
import IconArrow from '../images/svg/icon_arrow.svg'
import Header from '../components/Header'

import {
  menuListData,
  symptomListData,
  serviceListData,
} from '../utils/constant'
import Annotate from '../components/Annotate'
import { gsap, ScrollTrigger } from '../utils/initGsap'

import FlipCardsSwiper from '../components/FlipCardsSwiper'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // fontFamily: 'Noto Sans CJK TC !important',

      // fontFamily: theme.typography.body1.fontFamily,
      fontFamily:
        "-apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell','Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
      overflowX: 'hidden',
    },
    sectionOne: {
      minHeight: theme.spacing(90),
      maxHeight: theme.spacing(122.5),
      height: '100vh',
      backgroundImage: `url(${Ming01}),${theme.palette.background.main}`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      [theme.breakpoints.up('xl')]: {
        backgroundSize: 'contain',
      },
      position: 'relative',
      [theme.breakpoints.only('xs')]: {
        backgroundImage: `url(${MobileMing01}),${theme.palette.background.main}`,
        height: '150vw',
        maxHeight: '100vh',
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
      left: theme.spacing(6),
      top: `${theme.spacing(45)}px !important`,
      zIndex: 4,
      lineHeight: 1.5,
      fontWeight: '600',
      [theme.breakpoints.only('xs')]: {
        lineHeight: 1.4,
        fontWeight: '500',
        left: theme.spacing(2.5),
        top: `${theme.spacing(41.25)}px !important`,
      },
    },
    sectionOneImg: {
      position: 'relative',
      zIndex: 3,
      marginTop: 'auto',
      display: 'block',
      maxHeight: '100%',
      [theme.breakpoints.only('xs')]: {
        width: 'auto',
      },
    },
    sectionOneTitle: {
      left: 0,
      right: 0,
      textAlign: 'center',
      zIndex: 4,
      bottom: theme.spacing(8),
      fontSize: theme.spacing(15),
      fontWeight: 'lighter',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(5.5),
        bottom: theme.spacing(3),
        fontWeight: 'light',
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
      background: theme.palette.background.main,
      position: 'relative',
    },
    sectionThreeTextLeft: {
      left: '16%',
      bottom: '40%',
      [theme.breakpoints.down('md')]: {
        left: '12%',
      },
      [theme.breakpoints.only('xs')]: {
        left: '5%',
        bottom: '44%',
      },
    },
    sectionThreeTextRight: {
      right: '12%',
      bottom: '40%',
      [theme.breakpoints.down('md')]: {
        right: '2%',
      },
      [theme.breakpoints.only('xs')]: {
        right: '8%',
        bottom: '44%',
      },
    },
    sectionFour: {
      background: theme.palette.background.light,
      overflowX: 'hidden',
    },
    sectionFive: {
      background: theme.palette.background.main,
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
      fontSize: theme.spacing(8),
      fontWeight: 'bolder',
      zIndex: 2,
      position: 'absolute',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
        letterSpacing: 2,
      },
    },
    sectionFiveText: {
      fontSize: theme.spacing(7),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(2.125),
      },
    },
    symptomIcon: {
      display: 'block',
      width: theme.spacing(35.75),
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
      width: '100%',
    },
    footerTitle: {
      backgroundImage: `url(${LineDots})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      backgroundPositionX: 'right',
    },
    buttonRoot: {
      maxWidth: theme.spacing(47),
      borderRadius: theme.spacing(2),
      color: theme.palette.primary.light,
      borderColor: theme.palette.primary.light,
      fontSize: theme.spacing(3.5),
      fontWeight: 'bolder',
      marginRight: theme.spacing(4),
      padding: theme.spacing(3, 0),
      borderWidth: 2,
      [theme.breakpoints.only('xs')]: {
        maxWidth: '100%',
        marginBottom: theme.spacing(2),
        marginRight: 0,
        fontSize: theme.typography.h6.fontSize,
        padding: theme.spacing(2.5, 0),
      },
    },
    buttonOutlined: {
      '&:hover': {
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.light,
      },
    },
    iconSizeLarge: {
      textAlign: 'center',
      '& :first-child': {
        fontSize: theme.spacing(5),
        [theme.breakpoints.only('xs')]: {
          fontSize: theme.spacing(4),
        },
      },
    },
    imageIcon: {
      height: '100%',
      display: 'block',
    },
    container: {
      boxSizing: 'content-box',
      width: 'auto',
    },
    containerXl: {
      padding: 0,
      position: 'relative',
    },
    sup: {
      fontSize: theme.typography.caption.fontSize,
    },
  })
)

const App = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))
  const el = useRef()
  const q = gsap.utils.selector(el)
  const t1 = useRef()
  const t2 = useRef()
  const t3 = useRef()
  const [activeSection, setActiveSection] = useState('section-one')

  const updateActiveSection = (sectionName) => {
    ScrollTrigger.create({
      trigger: q(`.${sectionName}`),
      start: 'top 2px',
      onEnter: () => setActiveSection(sectionName),
      onEnterBack: () => setActiveSection(sectionName),
      // markers: true,
    })
  }

  // section one parallax motion
  useLayoutEffect(() => {
    // section one parallax motion
    gsap.to(q('.section-one-info'), {
      ease: 'none',
      scrollTrigger: {
        trigger: q('.section-one-info'),
        start: 'top bottom',
        end: 'bottom top',
        pin: true,
        scrub: true,
        pinSpacing: false,
      },
    })
    // gsap.to(q('.section-one-circle-one,.section-one-circle-two'), {
    //   y: -400,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: q('.section-one'),
    //     start: 'top top',
    //     scrub: true,
    //   },
    // })
    // gsap.to(q('.section-one-ming'), {
    //   y: 400,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: q('.section-one'),
    //     scrub: true,
    //     start: 'top top',
    //   },
    // })
    menuListData.forEach((menuItem) => {
      updateActiveSection(menuItem.id)
    })
    // section two arrow motion
    t1.current = gsap.timeline()
    t1.current
      .fromTo(
        q('.arrow-one'),
        { y: 12 },
        { y: 32, duration: 1, ease: 'power1.inOut', yoyo: true }
      )
      .fromTo(
        q('.arrow-two'),
        { scale: 1, opacity: 1 },
        {
          scale: 0.3,
          opacity: 0.6,
          duration: 1,
          ease: 'power1.inOut',
          yoyo: true,
        },
        '<'
      )
      .repeat(-1)
    // section three text motion
    t2.current = gsap.timeline()
    t2.current
      .fromTo(
        // text one motion
        q('.section-three-text-one-cover'),
        { xPercent: -100 },
        { xPercent: -96, duration: 0.2 }
      )
      .fromTo(
        q('.section-three-text-one'),
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
      .to(
        q('.section-three-text-one-cover'),
        { xPercent: 0, duration: 0.2 },
        '<'
      )
      .to(
        q('.section-three-text-one-cover'),
        { xPercent: -96, duration: 0.2 },
        '<0.2'
      )
      .to(
        q('.section-three-text-one-cover'),
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.2,
        },
        '<0.2'
      )
      .fromTo(
        // text two motion
        q('.section-three-text-two-cover'),
        { xPercent: -100 },
        { xPercent: -96, duration: 0.2 },
        '<-0.2'
      )
      .fromTo(
        q('.section-three-text-two'),
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '<'
      )
      .to(
        q('.section-three-text-two-cover'),
        { xPercent: 0, duration: 0.2 },
        '<'
      )
      .to(
        q('.section-three-text-two-cover'),
        { xPercent: -96, duration: 0.2 },
        '<0.2'
      )
      .to(
        q('.section-three-text-two-cover'),
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.2,
        },
        '<0.2'
      )

    ScrollTrigger.create({
      trigger: q('.section-three'),
      animation: t2.current,
      start: 'top 40%',
      toggleActions: 'play none none none',
      once: true,
      // scrub: true,
      // markers: true,
    })
    // section five text motion
    t3.current = gsap.timeline()
    t3.current
      .fromTo(
        q('.section-five-text-one-line'),
        { xPercent: -100 },
        { xPercent: 0, duration: 1 }
      )
      .fromTo(
        q('.section-five-text-two-line'),
        { xPercent: 100 },
        { xPercent: 0, duration: 1 },
        '<'
      )

    ScrollTrigger.create({
      trigger: q('.section-five-text-one-line'),
      start: 'top center',
      animation: t3.current,
      toggleActions: 'play none none none',
      once: true,
      // scrub: true,
      // markers: true,
    })
    // section six symptoms fade in motion
    const symptomsFadeIn = gsap.fromTo(
      q('.symptom-card'),
      { autoAlpha: 0, y: 100 },
      { duration: 1, autoAlpha: 1, y: 0, stagger: 0.6 }
    )
    ScrollTrigger.create({
      trigger: q('.symptom-card-wrapper'),
      animation: symptomsFadeIn,
      start: 'top center',
      toggleActions: 'play none none none',
      once: true,
    })
    // section six services fade in motion
    const servicesFadeIn = gsap.fromTo(
      q('.service-card'),
      { autoAlpha: 0, y: -50 },
      { duration: 0.6, autoAlpha: 1, y: 0, stagger: 0.3 }
    )
    ScrollTrigger.create({
      trigger: q('.service-card-wrapper'),
      animation: servicesFadeIn,
      start: 'top center',
      toggleActions: 'play none none none',
      once: true,
      // markers: true,
    })
    return () => ScrollTrigger.kill()
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
            fontSize={matches ? 'body1.fontSize' : '32px'}
            fontWeight='fontWeightBold'
            color='text.primary'
          >
            {symptom.label}
          </Box>
        </Typography>
      </Box>
    ))

  return (
    <div ref={el}>
      <Header active={activeSection}>{activeSection}</Header>
      <Box className={classes.root}>
        <Box className={classnames(classes.sectionOne, 'section-one')}>
          <Container className={classes.sectionOneContainer} maxWidth='lg'>
            {/* <Typography
              className={classnames(
                classes.sectionMotion,
                classes.sectionOneInfo,
                'section-one-info'
              )}
              component='div'
            >
              <Box
                fontSize={matches ? '18px' : 'h5.fontSize'}
                color='primary.contrastText'
                letterSpacing='1px'
              >
                張達明
                <br />
                「鼻咽癌康復者」
                <br />
                早期鼻咽癌存活率：
                {matches ? (
                  <Box fontSize='32px' component='div' fontWeight='600'>
                    90%+
                  </Box>
                ) : (
                  <Box fontSize='h4.fontSize' component='span'>
                    90%+
                  </Box>
                )}
              </Box>
            </Typography> */}
            {/* <Box
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
            ></Box> */}
            {/* <img
              className={classnames(classes.sectionOneImg, 'section-one-ming')}
              src={matches ? MobileMing01 : Ming01}
              alt='Cheung Tat Ming 01'
            /> */}
            {/* <Box
              className={classnames(
                classes.sectionMotion,
                classes.sectionOneTitle
              )}
              color='primary.contrastText'
            >
              GO LIVE AGAIN
            </Box> */}
          </Container>
        </Box>
        <Box
          className={classnames(classes.sectionTwo, 'section-two')}
          pb={matches ? 3 : 15}
          pt={matches ? 2 : 6}
        >
          <Box
            mb={matches ? 2 : 8}
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
          <Container className={classes.container} maxWidth='sm'>
            <Box
              fontSize={matches ? 'body1.fontSize' : 'h6.fontSize'}
              fontWeight='fontWeightLight'
              color='primary.contrastText'
              component='p'
              lineHeight={matches ? 1.5 : 2}
            >
              根據世界衛生組織2018年的數據顯示，香港鼻咽癌發病率是全球平均的5-6倍
              <sup className={classes.sup}>1,2</sup>。
              <br />
              {matches && <br />}
              其實不論年紀、性別及背景，任何人士都有機會患上鼻咽癌。
              <br />
              {matches && <br />}
              作為鼻咽癌康復者兼香港著名喜劇演員，張達明先生曾因忽略身體警號而延誤求醫。
              <br />
              {matches && <br />}
              想掌握健康，就要定期接受篩查。
              <br />
              {matches && <br />}
              即使不幸患癌都能積極開展第二人生?
              觀看以下影片，聽聽達明親述他的第二人生及進行「早期鼻咽癌篩查」的重要！
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
        <Box className={classnames(classes.sectionThree, 'section-three')}>
          <Container className={classes.containerXl} maxWidth='xl'>
            <img
              className={classes.mingImage}
              src={matches ? MobileMing02 : Ming02}
              alt='Cheung Tat Ming 02'
            />
            <Box
              color='background.secondaryLight'
              className={classnames(
                classes.sectionText,
                classes.sectionThreeTextLeft
              )}
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
              color='primary.contrastText'
              className={classnames(
                classes.sectionText,
                classes.sectionThreeTextRight
              )}
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
          </Container>
        </Box>
        <Box
          className={classnames(classes.sectionFour, 'section-four')}
          py={matches ? 3 : 10}
        >
          <Container className={classes.container} maxWidth='sm'>
            <Box
              fontSize={matches ? 'h6.fontSize' : '28px'}
              fontWeight='fontWeightBold'
              color='primary.contrastText'
            >
              鼻咽癌又稱「廣東癌」
            </Box>
            <Box
              fontSize={matches ? 'body2.fontSize' : 'h6.fontSize'}
              fontWeight='fontWeightLight'
              lineHeight={matches ? 1.5 : 2}
              color='primary.contrastText'
              mt={3}
            >
              鼻咽癌的高發地區為東南亞和南中國。當中香港、廣東和廣西的發病率特別高，因此也被稱為「廣東癌」。鼻咽癌是不可忽視的十大癌症之一，本港每年有六百至八百宗鼻咽癌病例，它更是過去十年間45-64歲男士五大常見癌症之一
              <sup className={classes.sup}>3</sup>。
            </Box>
          </Container>
          <Box
            fontSize={matches ? 'h6.fontSize' : '40px'}
            fontWeight='fontWeightBold'
            color='primary.contrastText'
            textAlign='center'
            mt={matches ? 8 : 10}
            mb={matches ? 3 : 6}
          >
            齊來認清真相！
          </Box>
          <Box className='flip-cards-container' display='flex'>
            <FlipCardsSwiper></FlipCardsSwiper>
          </Box>
        </Box>
        <Box className={classnames(classes.sectionFive, 'section-five')}>
          <Container className={classes.containerXl} maxWidth='xl'>
            <img
              className={classes.mingImage}
              src={matches ? MobileMing03 : Ming03}
              alt='Cheung Tat Ming 03'
            />
            <Box
              className={classnames(
                classes.sectionText,
                classes.sectionFiveText
              )}
              left='8%'
              bottom='47%'
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
              className={classnames(
                classes.sectionText,
                classes.sectionFiveText
              )}
              right='8%'
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
          </Container>
        </Box>
        <Box
          className={classnames(classes.sectionSix, 'section-six')}
          pt={matches ? 4 : 10}
          pb={matches ? 10 : 15}
        >
          <Container maxWidth='md'>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography component='div'>
                <Box
                  fontSize={matches ? 'body2.fontSize' : 'h6.fontSize'}
                  fontWeight='fontWeightLight'
                  textAlign={matches ? 'left' : 'center'}
                  color='primary.contrastText'
                >
                  鼻咽癌的徵狀容易與傷風感冒混淆而令人忽略，80%患者在初診時已是晚期
                  <sup className={classes.sup}>7</sup>。
                </Box>
                <Box
                  fontSize={matches ? 'h6.fontSize' : '32px'}
                  fontWeight='fontWeightBold'
                  color='primary.contrastText'
                  textAlign={matches ? 'left' : 'center'}
                  mt={3}
                >
                  鼻咽癌與感冒相似的徵狀包括：
                </Box>
              </Typography>
              <Box
                display='flex'
                mt={matches ? 2 : 1.5}
                className='symptom-card-wrapper'
              >
                {symptoms()}
              </Box>
              <Typography component='div'>
                <Box
                  fontSize={matches ? 'h6.fontSize' : '32px'}
                  fontWeight='fontWeightBold'
                  color='primary.contrastText'
                  textAlign={matches ? 'left' : 'center'}
                  mt={matches ? 3 : 10}
                >
                  怎樣才能「提防」患癌？
                </Box>
                <Box
                  fontSize={matches ? 'body2.fontSize' : 'h6.fontSize'}
                  fontWeight='fontWeightLight'
                  textAlign={matches ? 'left' : 'center'}
                  color='primary.contrastText'
                  lineHeight={1.5}
                  mt={matches ? 2 : 3}
                  mb={matches ? 3 : 8}
                >
                  研究顯示，進行早期鼻咽癌篩查能有效找出「隱形」患者，儘早展開適當治療，
                  <br />
                  令患者存活率可高達9成<sup className={classes.sup}>8</sup>。
                </Box>
              </Typography>
              <Box
                className={classes.serviceWrapper}
                pt={matches ? 2 : 8}
                pb={matches ? 6.5 : 10}
                px={matches ? 2 : 12.75}
                bgcolor='background.paper'
              >
                <Typography component='div'>
                  <Box
                    fontSize={matches ? 'h6.fontSize' : '44px'}
                    fontWeight='fontWeightBold'
                    color='text.secondary'
                  >
                    Take2 Prophecy™
                  </Box>
                  <Box
                    fontSize={matches ? 'h6.fontSize' : '44px'}
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
                    <Grid container spacing={matches ? 2 : 3}>
                      {serviceListData.map((service, index) => (
                        <Grid
                          key={service.label}
                          className='service-card'
                          item
                          xs={serviceListData.length - 1 === index ? 12 : 6}
                          sm={serviceListData.length - 1 === index ? 8 : 4}
                        >
                          <img
                            className={classes.serviceCard}
                            src={service.img}
                            alt={service.label}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <footer className='section-seven'>
          <Box
            bgcolor='primary.main'
            color='primary.contrastText'
            fontSize={matches ? 'h6.fontSize' : '36px'}
            fontWeight='fontWeightBold'
            py={matches ? 2 : 4}
            className={classnames(classes.footerTitle)}
          >
            <Container maxWidth='lg'>聯繫我們</Container>
          </Box>
          <Box py={matches ? 4 : 6} pb={matches ? 6 : 10}>
            <Container maxWidth='lg'>
              <Typography component='div'>
                <Box
                  fontSize={matches ? 'body1.fontSize' : '28px'}
                  fontWeight='fontWeightBold'
                  color='text.hint'
                  lineHeight={1.5}
                >
                  要掌握健康，就要立即行動！
                  <br />
                  歡迎透過下列方式與我們聯絡：
                </Box>
              </Typography>
              <Box width='100%' display={matches ? 'block' : 'flex'} my={4}>
                <Button
                  classes={{
                    root: classes.buttonRoot,
                    outlined: classes.buttonOutlined,
                    iconSizeLarge: classes.iconSizeLarge,
                  }}
                  size='large'
                  variant='outlined'
                  fullWidth
                  startIcon={
                    <Icon>
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
                    iconSizeLarge: classes.iconSizeLarge,
                  }}
                  size='large'
                  variant='outlined'
                  fullWidth
                  startIcon={
                    <Icon>
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
                    iconSizeLarge: classes.iconSizeLarge,
                  }}
                  size='large'
                  variant='outlined'
                  startIcon={
                    <Icon>
                      <img
                        className={classes.imageIcon}
                        src={IconLocation}
                        alt='location'
                      />
                    </Icon>
                  }
                >
                  成為會員<sup className={classes.sup}>10</sup>。
                </Button> */}
              </Box>
              <Typography component='div'>
                <Box
                  fontSize={matches ? 'body1.fontSize' : 'h6.fontSize'}
                  fontWeight={matches ? 'normal' : 'fontWeightBold'}
                  color='primary.light'
                  lineHeight={matches ? 2 : 3}
                >
                  聯絡資料
                </Box>
                <Box
                  fontSize={matches ? 'caption.fontSize' : 'body1.fontSize'}
                  fontWeight={matches ? 'normal' : 'fontWeightBold'}
                  lineHeight={1.5}
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
    </div>
  )
}

export default App
