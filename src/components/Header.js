import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

import Logo from '../images/logo.png'
import { menuListData } from '../utils/constant'

import { gsap, ScrollTrigger } from '../utils/initGsap'

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
      [theme.breakpoints.only('xs')]: {
        height: theme.spacing(6.5),
      },
    },
    logoContainer: {
      height: '100%',
      width: theme.spacing(70),
      background:
        'linear-gradient(90deg, #F5FBFC 0%, rgba(255, 255, 255, 0) 100%)',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(32.5),
      },
    },
    logo: {
      display: 'block',
      height: theme.spacing(5),
      paddingLeft: theme.spacing(6),
      [theme.breakpoints.only('xs')]: {
        paddingLeft: theme.spacing(2),
        height: theme.spacing(3.25),
      },
    },
    navButton: {
      [theme.breakpoints.only('xs')]: {
        fontSize: 30,
      },
    },
    iconButton: {
      background: theme.palette.grey[100],
      marginRight: theme.spacing(6),
      flexShrink: 0,
      [theme.breakpoints.only('xs')]: {
        marginRight: theme.spacing(2),
      },
    },
    menuPaper: {
      background: theme.palette.background.menu,
      boxShadow: 'none',
      borderRadius: `0 0 ${theme.spacing(4)}px ${theme.spacing(4)}px`,
      padding: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      top: '0 !important',
      right: 0,
      left: 'auto !important',
      [theme.breakpoints.only('xs')]: {
        maxWidth: theme.spacing(31.5),
        padding: theme.spacing(2),
        paddingTop: theme.spacing(8.5),
        borderRadius: `0 0 ${theme.spacing(1)}px ${theme.spacing(1)}px`,
      },
    },
    menuItem: {
      minHeight: theme.spacing(9),
      borderBottom: '1px solid #86BDDA',
      justifyContent: 'center',
      [theme.breakpoints.only('xs')]: {
        minHeight: theme.spacing(6),
        whiteSpace: 'normal',
      },
    },
  })
)

const Header = () => {
  const classes = useStyles()
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
        <Typography variant='body1' color='text.primary' component='div'>
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
