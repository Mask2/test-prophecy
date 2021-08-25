import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

import Logo from '../images/logo.png'
import { menuListData } from '../utils/constant'
import IconMenu from '../images/icon_menu.png'
import IconClose from '../images/icon_close.png'
import { gsap, ScrollTrigger } from '../utils/initGsap'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
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
    container: {
      padding: 0,
      height: theme.spacing(10),
      color: theme.palette.primary.main,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.only('xs')]: {
        height: theme.spacing(6.5),
      },
    },
    logoContainer: {
      cursor: 'pointer',
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
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 'lighter',
      [theme.breakpoints.only('xs')]: {
        fontSize: theme.typography.body1.fontSize,
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
      width: theme.spacing(44.25),
      [theme.breakpoints.only('xs')]: {
        minHeight: theme.spacing(6),
        minWidth: theme.spacing(27.5),
        whiteSpace: 'normal',
      },
    },
    menuIcon: {
      display: 'block',
      width: theme.spacing(4),
    },
    closeButton: {
      position: 'fixed',
      right: theme.spacing(6),
      top: theme.spacing(3) - 3,
      zIndex: theme.zIndex.tooltip,
      [theme.breakpoints.only('xs')]: {
        right: theme.spacing(2),
      },
    },
    closeIcon: {
      display: 'block',
      width: theme.spacing(4),
    },
    activeSection: {
      color: theme.palette.text.secondary,
      fontWeight: 'bolder',
    },
  })
)

const Header = (props) => {
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
        <Box
          className={classnames({
            [classes.activeSection]: props.active === menu.id,
          })}
          textAlign='center'
        >
          {menu.label}
        </Box>
      </MenuItem>
    ))

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box className={classnames('root', classes.root)}>
      <Container className={classes.container} maxWidth='xl'>
        <Box
          className={classes.logoContainer}
          onClick={() =>
            gsap.to(window, { duration: 1, scrollTo: `.section-one` })
          }
        >
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
          <img className={classes.menuIcon} src={IconMenu} alt='menu' />
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
          {anchorEl && (
            <IconButton
              className={classes.closeButton}
              size='small'
              onClick={handleClose}
            >
              <img className={classes.closeIcon} src={IconClose} alt='close' />
            </IconButton>
          )}
          {MenuList()}
        </Menu>
      </Container>
    </Box>
  )
}

export default Header
