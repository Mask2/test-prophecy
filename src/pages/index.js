import React, { useEffect, useRef, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import Link from '@material-ui/core/Link'
import classnames from 'classnames'
import '../global.css'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import Banner01 from '../images/banner_01.png'
import Banner02 from '../images/banner_02.png'
import Banner03 from '../images/banner_03.png'
import Parallax01 from '../images/parallax_01.png'
import Parallax02 from '../images/parallax_02.png'
import Parallax03 from '../images/parallax_03.png'
import Parallax04 from '../images/parallax_04.png'
import Parallax05 from '../images/parallax_05.png'
import ParallaxBottom from '../images/parallax_bottom.png'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const bannerList = [
  {
    title: '国内の貴重性の高い脳外科手術を厳選',
    subtitle:
      '日本国内でもまだ貴重な次世代のスマート治療室(SCOT®)で行われる手術は、日本国内においても難しい手術であったり、貴重な症例のものが多く含まれます。そういった貴重性の高い手術を厳選して配信しています。',
    img: Banner01,
  },
  {
    title: '手術経過が分かる無編集動画',
    subtitle:
      '無修正の手術動画を配信しているので、術野がはっきりと見ることができるためこれまで見ることのできなかった細かい部分までしっかりと学ぶことができ、あらゆる医師のニーズに応えることができます。',
    img: Banner02,
  },
  {
    title: '執刀医の判断がコメントで見える',
    subtitle:
      'OPeLinkの技術により手術動画とともに、その時どのように医師が判断を下したのかがコメントされているため、どういった理由で判断を下したのか、離れた画面越しからでも追体験することが可能です。',
    img: Banner03,
  },
]

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: '#0c2f9e',
      overflowX: 'hidden',
      fontFamily:
        'YuGothic, "Yu Gothic", Hiragino Kaku Gothic ProN, Hiragino Sans, BIZ UDPGothic, Meiryo, Arial, sans-serif',
      '& .box': {
        height: 30,
        width: 30,
        margin: theme.spacing(10, 0),
      },
      '& .container': {
        display: 'flex',
        height: '100vh',
        position: 'relative',
        '& img': {
          width: '50vw',
          maxWidth: theme.spacing(52),
          marginBottom: theme.spacing(4),
        },
      },
      '& .panel': {
        width: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(0, 6.5),
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 2,
      },
      '& .parallax-wrapper': {
        position: 'relative',
        height: '80vh',
        overflow: 'hidden',
        '& img': {
          position: 'absolute',
        },
        '& .parallax-01': {},
        '& .parallax-02': {},
        '& .parallax-03': {},
        '& .parallax-04': {
          bottom: '-50%',
          zIndex: 10,
        },
        '& .parallax-05': {
          zIndex: 9,
        },
        '& .parallax-bottom': {
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: -2,
          zIndex: theme.zIndex.snackbar,
        },
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
      right: theme.spacing(2),
      zIndex: theme.zIndex.appBar + 1,
    },
    title: {
      fontWeight: 'bold',
      whiteSpace: 'pre-line',
      fontSize: '2em',
    },
    subTitle: { maxWidth: theme.spacing(120) },
    menuPaper: {
      background: theme.palette.grey[100],
      boxShadow: 'none',
      color: theme.palette.grey[800],
    },
    iconButton: {
      background: theme.palette.grey[100],
    },
    featureBg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 1,
      backgroundColor: '#f2f5fb',
      color: '#e7ebf4',
      fontSize: '8.75vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'lighter',
      fontFamily: "'Manrope', sans-serif",
    },
    mainToolBar: {
      height: 80,
      background: theme.palette.grey[200],
      color: theme.palette.primary.main,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      width: '100%',
      left: 0,
      top: 0,
      transition: 'ease 0.4s',
      '& --scrolled': {
        height: 40,
      },
      zIndex: theme.zIndex.appBar,
    },
    fadeInWrapper: {
      display: 'flex',
      justifyContent: 'space-around',
      '& .fade-in': {
        width: 150,
        height: 200,
        backgroundColor: theme.palette.grey[300],
        borderRadius: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      },
    },
  })
)

const ParallaxDemo = () => {
  const classes = useStyles()
  const containerRef = useRef(null)
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    let sections = gsap.utils.toArray('.panel')
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: true,
        // snap: 1 / (sections.length - 1),
        start: 'top top',
        end: () => `+=${containerRef.current.offsetHeight}`,
        // markers: true,
      },
    })
    gsap.to('.parallax-05', {
      y: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-wrapper',
        scrub: 4,
      },
    })
    gsap.to('.parallax-04', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-wrapper',
        scrub: true,
      },
    })
    gsap.to('.parallax-03', {
      y: -400,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-wrapper',
        scrub: true,
      },
    })

    const showAnim = gsap
      .from('.main-tool-bar', {
        yPercent: -100,
        paused: true,
        duration: 0.1,
      })
      .progress(1)

    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      },
    })

    const anim = gsap.fromTo(
      '.fade-in',
      { autoAlpha: 0, y: -50 },
      { duration: 1, autoAlpha: 1, y: 0, stagger: 0.3 }
    )
    ScrollTrigger.create({
      trigger: '.fade-in',
      start: 'center center',
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
      // markers: true,
    })
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const scrollToHome = () => {
    gsap.to(window, { duration: 1, scrollTo: '.section-01' })
  }

  const scrollToParallax = () => {
    gsap.to(window, { duration: 1, scrollTo: '.parallax-wrapper' })
  }

  const scrollToList = () => {
    gsap.to(window, { duration: 1, scrollTo: '.container' })
  }

  return (
    <div className={classes.root}>
      <IconButton
        className={classes.navButton}
        aria-label='menu'
        aria-haspopup='true'
        onClick={handleClick}
        size='small'
        classes={{ root: classes.iconButton }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.menuPaper }}
      >
        <MenuItem onClick={scrollToHome}>Home</MenuItem>
        <MenuItem onClick={scrollToParallax}>Parallax</MenuItem>
        <MenuItem onClick={scrollToList}>Features</MenuItem>
      </Menu>
      <div className={classnames('main-tool-bar', classes.mainToolBar)}>
        Header
      </div>
      <Box className={classnames(classes.section, 'section-01')}>
        <Typography variant='h3' color='initial'>
          section one
        </Typography>
      </Box>
      <Box
        className={classnames(classes.section, 'section', 'parallax-wrapper')}
      >
        <img className={classnames('parallax-01')} src={Parallax01} alt='' />
        <img className={classnames('parallax-02')} src={Parallax02} alt='' />
        <img className={classnames('parallax-03')} src={Parallax03} alt='' />
        <img className={classnames('parallax-04')} src={Parallax04} alt='' />
        <img className={classnames('parallax-05')} src={Parallax05} alt='' />
        <img
          className={classnames('parallax-bottom')}
          src={ParallaxBottom}
          alt=''
        />
      </Box>
      <Box className={classnames(classes.section, classes.fadeInWrapper)}>
        <div className='fade-in'>1</div>
        <div className='fade-in'>2</div>
        <div className='fade-in'>3</div>
        <div className='fade-in'>4</div>
      </Box>
      <Box className={classnames(classes.section)}>
        <Typography variant='h3' color='initial'>
          section two
        </Typography>
      </Box>
      <Box ref={containerRef} className='container'>
        <Box className={classes.featureBg}>Features of oprXpark</Box>
        {bannerList.map((banner) => (
          <Box key={banner.title} className='panel'>
            <img src={banner.img} alt='' />
            <Box className={classes.title} textAlign='center' paddingTop={2}>
              {banner.title}
            </Box>
            <Box className={classes.subTitle} paddingTop={2}>
              <Typography variant='subtitle1' color='initial'>
                {banner.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={classnames(classes.section, 'footer')}>
        <Typography variant='h3' color='initial'>
          footer
        </Typography>
      </Box>
    </div>
  )
}

export default ParallaxDemo
