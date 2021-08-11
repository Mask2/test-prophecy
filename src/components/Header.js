import React, { useRef, useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

import Logo from '../images/logo.png'
import { menuListData } from '../utils/constant'

import classnames from 'classnames'
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import Button from '@material-ui/core/Button'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: theme.spacing(10),
      color: theme.palette.primary.main,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    navButton: {},
    iconButton: {
      background: theme.palette.grey[100],
      marginRight: theme.spacing(6),
      flexShrink: 0,
    },
    menuPaper: {
      background: theme.palette.background.menu,
      boxShadow: 'none',
      color: theme.palette.grey[800],
      borderRadius: `0 0 ${theme.spacing(4)}px ${theme.spacing(4)}px`,
      padding: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      top: '0 !important',
      right: 0,
      left: 'auto !important',
    },
    menuItem: {
      minHeight: theme.spacing(9),
      borderBottom: '1px solid #86BDDA',
      justifyContent: 'center',
    },
    logoContainer: {
      height: '100%',
      width: theme.spacing(70),
      background:
        'linear-gradient(90deg, #F5FBFC 0%, rgba(255, 255, 255, 0) 100%)',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      display: 'block',
      height: theme.spacing(5),
      paddingLeft: theme.spacing(6),
    },
  })
)

const Header = () => {
  const classes = useStyles()
  const containerRef = useRef(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  useEffect(() => {
    const showAnim = gsap
      .from('.root', {
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
  }, [])

  const MenuList = () =>
    menuListData.map((menu) => (
      <MenuItem
        classes={{ root: classes.menuItem }}
        key={menu.label}
        onClick={() =>
          gsap.to(window, { duration: 1, scrollTo: `.${menu.id}` })
        }
      >
        <Typography variant='body1' color='primary' component='div'>
          <Box textAlign='center'>{menu.label}</Box>
        </Typography>
      </MenuItem>
    ))

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box className={classnames('root', classes.root)}>
      <Box className={classes.logoContainer}>
        <img className={classes.logo} src={Logo} alt='take2 logo' />
      </Box>
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
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {MenuList()}
      </Menu>
    </Box>
  )
}

export default Header
