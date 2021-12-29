import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Link from '@material-ui/core/Link'
import classnames from 'classnames'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Snackbar from '@material-ui/core/Snackbar'
import Logo from '../images/logo.png'
import { menuListData } from '../utils/constant'
import IconMenu from '../images/icon_menu.png'
import IconClose from '../images/icon_close.png'
import { gsap } from '../utils/initGsap'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'

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
      backgroundColor: theme.palette.background.paper,
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
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      display: 'block',
      height: theme.spacing(5),
      paddingLeft: theme.spacing(6),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(4),
      },
      [theme.breakpoints.only('xs')]: {
        paddingLeft: theme.spacing(1),
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
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(4),
      },
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
        width: 'auto',
        minHeight: theme.spacing(6),
        minWidth: theme.spacing(27.5),
        whiteSpace: 'normal',
      },
    },
    menuIcon: {
      display: 'block',
      width: theme.spacing(5),
    },
    closeButton: {
      position: 'fixed',
      right: theme.spacing(6),
      top: theme.spacing(3) - 3,
      zIndex: theme.zIndex.tooltip,
      [theme.breakpoints.only('xs')]: {
        top: theme.spacing(1) - 1,
        right: theme.spacing(2),
      },
    },
    closeIcon: {
      display: 'block',
      width: theme.spacing(5),
    },
    activeSection: {
      color: theme.palette.text.secondary,
      fontWeight: 'bolder',
    },
    sup: {
      fontSize: theme.typography.caption.fontSize,
      marginBottom: 'auto',
    },
    promoWrapper: {
      display: 'flex',
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.h4.fontSize,
      color: theme.palette.secondary.main,
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.h5.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body1.fontSize,
        marginRight: 0,
      },
    },
    promoMobileWrapper: {
      marginLeft: 'auto',
      color: theme.palette.secondary.main,
      textAlign: 'left',
      fontWeight: theme.typography.fontWeightBold,
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.caption.fontSize,
        // marginRight: theme.spacing(1),
      },
    },
    promoLabel: {
      marginRight: theme.spacing(0.5),
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    promoBtn: {
      display: 'flex',
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.background.paper,
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    promoCode: {
      padding: theme.spacing(0.5, 1),
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0.5),
      },
    },
    promoCopy: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(0.5, 2),
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0.5),
      },
    },
    snackbar: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.secondary.contrastText,
    },
  })
)

const Header = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [showCopyAlert, setShowCopyAlert] = useState(false)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const MenuList = () =>
    menuListData.map((menu, index) =>
      menu.href ? (
        <Link
          // Id for Google Analytics Event Tracking
          id={index === 5 ? 'jdiCeq' : 'djsZkeq'}
          href={menu.href}
          target='_blank'
          underline='hover'
          key={menu.label}
        >
          <MenuItem classes={{ root: classes.menuItem }}>
            <Box textAlign='center' color='text.primary'>
              {menu.label}
              {menu.withSup && <sup className={classes.sup}>*</sup>}
            </Box>
          </MenuItem>
        </Link>
      ) : (
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
      )
    )

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSnackBarClose = () => setShowCopyAlert(false)
  const handleSnackBarOpen = () => setShowCopyAlert(true)

  return (
    <>
      <Snackbar
        open={showCopyAlert}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message='優惠碼複製成功！'
        ContentProps={{
          classes: {
            root: classes.snackbar,
          },
        }}
      ></Snackbar>
      <Box className={classnames('root', classes.root)}>
        <Container className={classes.container} maxWidth='xl'>
          <Box className={classes.logoContainer}>
            <img className={classes.logo} src={Logo} alt='take2 logo' />
          </Box>
          <Hidden xsDown>
            <Box className={classes.promoWrapper}>
              <Box className={classes.promoLabel}>
                會員迎新優惠價$1,870(原價$2,200)優惠碼
              </Box>
              <CopyToClipboard text='NEW330' onCopy={handleSnackBarOpen}>
                <Box className={classes.promoBtn}>
                  <Box className={classes.promoCode}>NEW330</Box>
                  <Box className={classes.promoCopy}>複製</Box>
                </Box>
              </CopyToClipboard>
            </Box>
          </Hidden>
          <Hidden smUp>
            <Box className={classes.promoMobileWrapper}>
              <Box className={classes.promoLabel}>
                會員迎新優惠價$1,870(原價$2,200)
              </Box>
              <Box className={classes.promoWrapper}>
                <Box className={classes.promoLabel}>優惠碼</Box>
                <CopyToClipboard text='NEW330' onCopy={handleSnackBarOpen}>
                  <Box className={classes.promoBtn}>
                    <Box className={classes.promoCode}>NEW330</Box>
                    <Box className={classes.promoCopy}>複製</Box>
                  </Box>
                </CopyToClipboard>
              </Box>
            </Box>
          </Hidden>
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
                <img
                  className={classes.closeIcon}
                  src={IconClose}
                  alt='close'
                />
              </IconButton>
            )}
            {MenuList()}
          </Menu>
        </Container>
      </Box>
    </>
  )
}

export default Header
