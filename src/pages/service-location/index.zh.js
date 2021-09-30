import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Logo from '../../images/logo.png'
import { E_HEALTH_LINK } from '../../utils/constant'
import JSONData from '../../data/serviceLocation.json'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      boxSizing: 'border-box',
      fontFamily: '"微軟正黑體", "Microsoft JhengHei", sans-serif',
      color: '#000 !important',
      padding: theme.spacing(3),
      boxShadow: 'none',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(3, 2),
      },
    },
    logo: {
      display: 'block',
      height: theme.spacing(5.5),
    },
    table: {
      minWidth: theme.spacing(110),
    },
    tableHeight: {
      height: theme.spacing(7),
    },
    tableHead: {
      background: 'rgb(208, 206, 206)',
      fontSize: theme.typography.h5.fontSize,
      fontWeight: 'bold',
    },
    darkRow: {
      background: 'rgb(237, 237, 237)',
    },
    tableScrollContainer: {
      overflowX: 'scroll',
    },
  }
})

export default function ServiceLocation() {
  const classes = useStyles()

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Box mb={2}>
        <Link href={E_HEALTH_LINK} target='_blank'>
          <img className={classes.logo} src={Logo} alt='take2 logo' />
        </Link>
      </Box>
      <Typography component='div'>
        <Box
          textAlign='center'
          color='#444444'
          fontSize='h6.fontSize'
          fontWeight='bold'
          my={3}
        >
          篩查服務點
        </Box>
        <Box
          textAlign='center'
          fontSize='body1.fontSize'
          fontWeight='lighter'
          mb={3}
        >
          (包括醫院﹑診所或醫務中心)**請向醫護人員查詢**
        </Box>
      </Typography>
      <Box className={classes.tableScrollContainer}>
        <Table
          className={classes.table}
          size='small'
          aria-label='a dense table'
        >
          <TableHead>
            <TableRow className={classes.tableHeight}>
              <TableCell width='10%'>地區</TableCell>
              <TableCell width='30%' align='left'>
                診所
              </TableCell>
              <TableCell width='40%' align='left'>
                地址
              </TableCell>
              <TableCell width='20%' align='left'>
                聯絡電話
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {JSONData.map((row, index) => (
              <TableRow
                className={classnames(classes.tableHeight, {
                  [classes.darkRow]: index % 2 === 1,
                })}
                key={index}
              >
                <TableCell component='th' scope='row'>
                  {row.district}
                </TableCell>
                <TableCell align='left'>{row.clinic}</TableCell>
                <TableCell align='left'>{row.address}</TableCell>
                <TableCell align='left'>{row.call}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  )
}
