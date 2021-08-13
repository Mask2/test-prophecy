import React from 'react'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import { cardListData } from '../utils/constant'

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
      width: '30vw',
      paddingTop: '103%',
      position: 'relative',
      flexShrink: 0,
      // margin: theme.spacing(0, 2),
      transform: 'rotateY(0deg)',
      transformStyle: 'preserve-3d',
      perspective: 1000,
      cursor: 'pointer',
      transition: 'transform 0.7s ease-in-out',
      '&:hover': {
        transform: 'rotateY(-180deg)',
      },
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(26.25),
        height: theme.spacing(27.5),
        // margin: theme.spacing(0, 1),
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
      },
    },
    questionIcon: {
      width: theme.spacing(30),
      display: 'block',
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(16.5),
      },
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
      // overflow: 'visible',
      // '& .swiper-pagination': {
      //   bottom: theme.spacing(-4),
      // },
      '.swiper-button-next': { color: 'red' },
    },
    dotsWrapper: {},
    dot: {
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      margin: theme.spacing(0, 1.5),
      backgroundColor: theme.palette.background.paper,
      borderRadius: '50%',
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(1),
        height: theme.spacing(1),
        margin: theme.spacing(0, 1),
      },
    },
  })
)

const FlipCards = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))
  console.log(matches)

  return <div className={classes.root}></div>
}

export default FlipCards
