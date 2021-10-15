import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import ConsumptionVoucherBanner from '../../images/consumption_voucher_landing_page_banner.jpg'
// import Clinic01 from '../../images/clinic_icon_01.png'
import Clinic02 from '../../images/clinic_icon_02.png'
import Clinic03 from '../../images/clinic_icon_03.png'

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    fontFamily: '"微軟正黑體", "Microsoft JhengHei", sans-serif',
    color: '#444444',
    padding: theme.spacing(3),
    boxShadow: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2),
    },
  },
  banner: {
    display: 'block',
    width: '100%',
  },
  clinicTitle: {
    fontWeight: 700,
  },
  clinicIcon: {
    display: 'block',
    height: theme.spacing(6),
  },
  clinicContainer: {},
  clinicLink: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    fontWeight: 700,
  },
}))

const ConsumptionVoucher = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root} p={3}>
      <Typography component='div'>
        <Box fontSize='h4.fontSize' my={3}>
          Take2 Prophecy™ 早期鼻咽癌篩查 消費券優惠
        </Box>
        <Box fontSize='body1.fontSize' fontWeight='lighter' lineHeight={2}>
          <img
            className={classes.banner}
            src={ConsumptionVoucherBanner}
            alt='consumption voucher landing page banner'
          />
          <Box my={3}>
            第一期消費券已用來買了心頭好或已用於吃喝玩樂？享樂過後，有沒有考慮將第二期的金額預留部份進行身體檢查和癌症篩查？揀選合適的體檢計劃十分重要，切勿忽略身體警號！
            <br />
            早期鼻咽癌病徵不明顯，如果出現流鼻血、聽力減退、持續偏頭痛及頸側淋巴核脹大等徵狀時，你有可能已經患上鼻咽癌。進行早期鼻咽癌篩查，有助提高治癒機會及存活率，男女合用，特別適合吸煙、有家族病史及關注健康的人士。
            <br />
            Take2
            Prophecy™是一項無創早期鼻咽癌篩查，透過簡單抽血程序，結合PCR及次世代DNA測序技術
            (NGS: Next-generation
            Sequencing)，來分析血漿中人類和EB病毒的DNA與鼻咽癌相關之特徵，能有效識別出早期鼻咽癌患者。
            <Box my={3}>
              Take2
              Health聯乘三大醫療集團推出消費券限時優惠，除尊享折扣優惠，更有機會獲得高達$30,000的禮品！
            </Box>
          </Box>
          <Box my={4}>
            <Box className={classes.clinicTitle}>1.卓健醫療服務</Box>
            <Box my={2}>
              I.鼻咽癌篩查計劃 <br />
              服務範圍包括：
              詳細病歷調查、醫生會診、鼻咽癌基因檢測、醫生解釋報告 <br />
              II.消費券優惠 可享接近8折優惠
              <br />
              III.服務覆蓋點遍佈香港島、九龍、新界及離島。
            </Box>
            <Link
              className={classes.clinicLink}
              href='https://bit.ly/3keKUqF'
              target='_blank'
            >
              立即瀏覽網站了解詳情
            </Link>
          </Box>
          <Box my={4}>
            <Box className={classes.clinicTitle} mb={2}>
              2.香港仁和體檢
            </Box>
            <img
              className={classes.clinicIcon}
              src={Clinic02}
              alt='clinic 02'
            />
            <Box my={2}>
              I.早期鼻咽癌篩查計劃
              <br /> 測試重點：
              結合PCR和次世代DNA測序技術，分析血漿中的DNA，並使用先進的計算法分析數據及存活率{' '}
              <br />
              II.消費券優惠
              <br />
              可享低至53折優惠，並送「醫思健康同心同抗疫計劃」會籍及免費享用超過$30,000的健康美麗禮品包
              <br />
              III.香港仁和體檢位處旺角朗豪坊中心地段，提供一站式醫療健康管理服務。
            </Box>
            <Link
              className={classes.clinicLink}
              href='https://bit.ly/3lrPMJE'
              target='_blank'
            >
              立即瀏覽網站了解詳情
            </Link>
          </Box>
          <Box my={4}>
            <Box className={classes.clinicTitle}>3.時代醫療集團</Box>
            <img
              className={classes.clinicIcon}
              src={Clinic03}
              alt='clinic 03'
            />
            <Box my={2}>
              I.吸煙人士檢查計劃 <br />
              服務範圍包括： 基本體格檢查／心臟檢查／X 光檢查
              ／血脂肪／全血計數／ 糖尿病 ／基因測試（早期鼻咽癌篩查）
              <br />
              II.消費券優惠 可享接近$1,200折扣優惠
              <br />
              III.時代醫療集團於尖沙咀及上水設有分店，位置便利。其自設香港註冊化驗所，提供一站式健康體檢服務如全面身體檢查。
            </Box>
            <Link
              className={classes.clinicLink}
              href='https://bit.ly/3mKkPQe'
              target='_blank'
            >
              立即瀏覽網站了解詳情
            </Link>
          </Box>
        </Box>
      </Typography>
    </Box>
  )
}

export default ConsumptionVoucher
