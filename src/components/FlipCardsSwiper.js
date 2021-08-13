import React, { useState } from 'react'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import classnames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { cardListData } from '../utils/constant'

SwiperCore.use([Pagination, Navigation])

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    sectionFiveText: {
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body1.fontSize,
        letterSpacing: 2,
      },
    },
    cardWrapper: {},
    questionWrapper: {
      width: '27vw',
      maxWidth: theme.spacing(50),
      height: '28vw',
      position: 'relative',
      flexShrink: 0,
      // margin: theme.spacing(0, 2),
      transform: 'rotateY(0deg)',
      transformStyle: 'preserve-3d',
      perspective: 1000,
      cursor: 'pointer',
      transition: 'transform 0.7s ease-in-out',
      [theme.breakpoints.only('xs')]: {
        width: '56vw',
        maxWidth: theme.spacing(26.25),
        height: '55vw',
      },
    },
    questionContent: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: theme.spacing(4),
      border: `6px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      flexDirection: 'column',
      backfaceVisibility: 'hidden',
      position: 'absolute',
      zIndex: 1,
      [theme.breakpoints.only('xs')]: {
        border: `3px solid ${theme.palette.primary.main}`,
        borderRadius: theme.spacing(2),
      },
    },
    questionIcon: {
      width: '60%',
      display: 'block',
      // [theme.breakpoints.only('xs')]: {
      //   width: theme.spacing(16.5),
      // },
    },
    answerWrapper: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: theme.spacing(4),
      border: `6px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      zIndex: -1,
      transform: 'rotateY(180deg) translateZ(1px)',
      [theme.breakpoints.only('xs')]: {
        border: `3px solid ${theme.palette.primary.main}`,
        borderRadius: theme.spacing(2),
      },
    },
    answerImg: {
      display: 'block',
      width: '100%',
    },
    swiperSlide: {
      display: 'flex',
      justifyContent: 'center',
    },
    swiper: {
      paddingBottom: theme.spacing(8),
      '& .swiper-pagination': {
        bottom: theme.spacing(1),
        [theme.breakpoints.only('xs')]: {
          bottom: theme.spacing(3),
        },
      },
      '& .swiper-pagination-bullet': {
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
        backgroundColor: theme.palette.secondary.contrastText,
        opacity: 1,
        [theme.breakpoints.only('xs')]: {
          width: theme.spacing(1),
          height: theme.spacing(1),
        },
      },
      '& .swiper-pagination-bullet-active': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    slideHover: {
      '&:hover': {
        transform: 'rotateY(-180deg)',
      },
    },
    cover: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: theme.spacing(3.25),
      transition: 'opacity 0.3s ease',
      opacity: 1,
      [theme.breakpoints.only('xs')]: {
        borderRadius: theme.spacing(1.5),
      },
    },
    hideCover: {
      opacity: 0,
    },
  })
)

const FlipCardsSwiper = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))
  const [activeSlide, setActiveSlide] = useState(0)

  const fakeActive = (index) =>
    index ===
    (activeSlide + (matches ? 0 : 1) >= 5 ? 0 : activeSlide + (matches ? 0 : 1))

  return (
    <Swiper
      spaceBetween={matches ? '-40%' : '13%'}
      slidesPerView={matches ? 1 : 3}
      pagination={{ clickable: true }}
      navigation
      grabCursor
      loop={true}
      onSlideChange={(swiper) => {
        setActiveSlide(swiper.realIndex)
      }}
      onSwiper={(swiper) => console.log(swiper)}
      className={classes.swiper}
      initialSlide={matches ? 0 : 2}
      onInit={(swiper) => {
        setActiveSlide(swiper.realIndex)
      }}
    >
      {cardListData.map((card, index) => (
        <SwiperSlide className={classes.swiperSlide} key={card.label}>
          <Box
            className={classnames(classes.questionWrapper, 'flip-card', {
              [classes.slideHover]: fakeActive(index),
            })}
          >
            <Box className={classes.questionContent}>
              <Box
                className={classnames(classes.cover, {
                  [classes.hideCover]: fakeActive(index),
                })}
              ></Box>
              <Box
                fontSize={matches ? 'body1.fontSize' : 'h5.fontSize'}
                fontWeight='fontWeightBolder'
                color='secondary.main'
                m={0}
                mt={matches ? 1.5 : 4}
              >
                {card.label}
              </Box>
              <img
                className={classes.questionIcon}
                src={card.icon}
                alt={card.label}
              />
              <Box
                fontSize={matches ? 'body1.fontSize' : 'h5.fontSize'}
                fontWeight='fontWeightBold'
                color='primary.light'
                m={0}
                mt='auto'
                mb={matches ? 3 : 4}
              >
                {card.question}
              </Box>
            </Box>
            <Box className={classes.answerWrapper}>
              <img
                className={classes.answerImg}
                src={card.answer}
                alt={card.label}
              />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default FlipCardsSwiper
