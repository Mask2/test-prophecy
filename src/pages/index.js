import React, { useEffect, useRef } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import Box from '@material-ui/core/Box'
import classnames from 'classnames'
import '../global.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      overflowX: 'hidden',
      '& .box': {
        height: 30,
        width: 30,
        margin: theme.spacing(10, 0),
      },
      '& .container': {
        display: 'flex',
        height: '100vh',
      },
      '& .panel': {
        width: '100%',
        flexShrink: 0,
      },
    },
    section: {
      height: '100vh',
      fontWeight: 'bolder',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navButton: {
      position: 'fixed',
      top: theme.spacing(2),
      left: theme.spacing(2),
      zIndex: theme.zIndex.tooltip,
    },
  })
)

const ParallaxDemo = () => {
  const classes = useStyles()
  const containerRef = useRef(null)
  useEffect(() => {
    let sections = gsap.utils.toArray('.panel')
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        start: 'top top',
        end: () => `+=${containerRef.current.offsetHeight}`,
        // markers: true,
      },
    })
    gsap.to('.circle1', {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section',
        scrub: true,
      },
    })
    gsap.to('.circle2', {
      y: 300,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section',
        scrub: true,
      },
    })
  }, [])

  const handleScrollTo = () => {
    gsap.to(window, { duration: 1, scrollTo: '.container' })
  }

  return (
    <div className={classes.root}>
      <Button
        className={classes.navButton}
        variant='contained'
        color='default'
        onClick={handleScrollTo}
      >
        test scroll to panel
      </Button>
      <Box className={classnames(classes.section, 'section')}>
        <Typography variant='h5' color='initial'>
          section one
        </Typography>
        <Box className={classnames(classes.circle, 'circle1')} bgcolor='yellow'>
          <Typography variant='caption' color='initial'>
            circle
          </Typography>
        </Box>
        <Box className={classnames(classes.circle, 'circle2')} bgcolor='orange'>
          <Typography variant='caption' color='initial'>
            circle
          </Typography>
        </Box>
      </Box>
      <Box className={classnames(classes.section)}>
        <Typography variant='h5' color='initial'>
          section two
        </Typography>
      </Box>
      <Box ref={containerRef} className='container'>
        <Box className='panel' bgcolor='pink'>
          panel one
        </Box>
        <Box className='panel' bgcolor='yellow'>
          panel tow
        </Box>
        <Box className='panel' bgcolor='orange'>
          panel three
        </Box>
        <Box className='panel' bgcolor='purple'>
          panel four
        </Box>
      </Box>
      <Box className={classnames(classes.section, 'footer')}>
        <Typography variant='h5' color='initial'>
          footer
        </Typography>
      </Box>
    </div>
  )
}

export default ParallaxDemo
