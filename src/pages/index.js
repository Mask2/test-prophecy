import React, { useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import MingO1 from '../images/ming_01.png'
import MingO2 from '../images/ming_02.png'
import MingO3 from '../images/ming_03.png'

import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    sectionOne: {
      height: theme.spacing(90),
      background: theme.palette.gradient.main,
    },
    sectionTwo: {
      height: theme.spacing(110),
      background: theme.palette.gradient.dark,
    },
    sectionThree: {
      background: theme.palette.gradient.light,
    },
    sectionFour: {
      height: theme.spacing(120),
      background: theme.palette.gradient.light,
    },
    sectionFive: {
      background: theme.palette.gradient.light,
    },
    sectionSix: {
      height: theme.spacing(200),
      backgroundColor: theme.palette.background.default,
    },
    footer: {
      height: theme.spacing(15),
      backgroundColor: theme.palette.primary.main,
    },
    mingImage: {
      display: 'block',
      width: '100%',
    },
  })
)

const ParallaxDemo = () => {
  const classes = useStyles()

  useEffect(() => {}, [])

  return (
    <Box className={classes.root}>
      <Box>
        {/* <Container maxWidth='lg'>
          <Box bgcolor=''>header</Box>
        </Container> */}
      </Box>
      <Box className={classes.sectionOne}></Box>
      <Box className={classes.sectionTwo}></Box>
      <Box className={classes.sectionThree}>
        <img
          className={classes.mingImage}
          src={MingO2}
          alt='Cheung Tat Ming 02'
        />
      </Box>
      <Box className={classes.sectionFour}></Box>
      <Box className={classes.sectionFive}>
        <img
          className={classes.mingImage}
          src={MingO3}
          alt='Cheung Tat Ming 03'
        />
      </Box>
      <Box className={classes.sectionSix}></Box>
      <footer>
        <Box className={classes.footer}></Box>
      </footer>
    </Box>
  )
}

export default ParallaxDemo
