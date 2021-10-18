import AnswerO1 from '../images/answer_01.png'
import AnswerO2 from '../images/answer_02.png'
import AnswerO3 from '../images/answer_03.png'
import AnswerO4 from '../images/answer_04.png'
import AnswerO5 from '../images/answer_05.png'
import Question01 from '../images/svg/icon_question_01.svg'
import Question02 from '../images/svg/icon_question_02.svg'
import Question03 from '../images/svg/icon_question_03.svg'
import Question04 from '../images/svg/icon_question_04.svg'
import Question05 from '../images/svg/icon_question_05.svg'
import Service01 from '../images/service_01.png'
import Service02 from '../images/service_02.png'
import Service03 from '../images/service_03.png'
import Service04 from '../images/service_04.png'
import Service05 from '../images/service_05.png'
import Symptom02 from '../images/svg/symptom_02.svg'
import Symptom03 from '../images/svg/symptom_03.svg'

export const WHATS_APP_LINK =
  'https://api.whatsapp.com/send/?phone=85253770823&text=Halo%2C+I+want+to+know+more+about+Prophecy+Test%21+&app_absent=0'
export const ADDRESS_LINK = '/zh/service-location/'
export const FACEBOOK_LINK = 'https://www.facebook.com/take2health.ltd'
export const E_HEALTH_LINK = '/whats-new/campaign/'
export const CONSUMPTION_VOUCHER_LINK = '/zh/promotions/consumption-voucher'
export const SERVICE_PHONE = '(852) 3613 0536'
export const SERVICE_EMAIL = 'customer.support@take2.health'

export const menuListData = [
  {
    label: 'HOME',
    id: 'section-one',
  },
  {
    label: 'GO LIVE AGAIN 達明分享',
    id: 'section-two',
  },
  {
    label: '鼻咽癌，真的離你很遠？',
    id: 'section-three',
  },
  {
    label: '鼻咽癌不能「預防」，卻能「提防」',
    id: 'section-five',
  },
  {
    label: 'Take2 Prophecy™ 早期鼻咽癌篩查服務特色',
    id: 'section-six',
  },
  {
    label: '立即查詢／預約',
    id: 'section-seven',
    href: WHATS_APP_LINK,
  },
  {
    label: '查看篩查服務點',
    id: 'section-seven',
    href: ADDRESS_LINK,
  },
  {
    label: '聯絡我們',
    id: 'section-seven',
    href: '',
  },
]

export const cardListData = [
  {
    label: '年輕',
    icon: Question01,
    question: '就不怕？',
    answer: AnswerO1,
  },
  {
    label: '男士「專利」？',
    icon: Question02,
    question: '',
    answer: AnswerO2,
  },
  {
    label: '「七老八十」',
    icon: Question03,
    question: '才會患上？',
    answer: AnswerO3,
  },
  {
    label: '鼻咽癌病徵',
    icon: Question05,
    question: '一目了然？',
    answer: AnswerO5,
  },
  {
    label: '飲食習慣',
    icon: Question04,
    question: '都能引致鼻咽癌？',
    answer: AnswerO4,
  },
]

export const symptomListData = [
  {
    label: '頭痛',
    icon: Question05,
  },
  {
    label: '鼻塞',
    icon: Symptom02,
  },
  {
    label: '聲音沙啞',
    icon: Symptom03,
  },
]

export const serviceListData = [
  { label: 'service 01', img: Service01 },
  { label: 'service 02', img: Service02 },
  { label: 'service 03', img: Service03 },
  { label: 'service 04', img: Service04 },
  { label: 'service 05', img: Service05 },
]

export const annotateListData = [
  {
    content:
      '“Nasopharyngeal Cancer.” <i>Centre for Health Protection, Department of Health, The Government of the Hong Kong Special Administrative Region,</i> 2021, www.chp.gov.hk/en/healthtopics/content/25/54.html, accessed 23 July 2021',
  },
  {
    content:
      'Bray, F., et al. “Global Cancer Statistics 2018: GLOBOCAN Estimates of Incidence and Mortality Worldwide for 36 Cancers in 185 Countries.” <i>CA: A Cancer Journal for Clinicians,</i> vol. 68, no. 6, 2018, pp. 394-424.',
  },
  {
    content:
      '<i>Hong Kong Cancer Registry.</i> Hong Kong Hospital Authority, www3.ha.org.hk/cancereg/. Accessed 23 May 2021.',
  },
  {
    content:
      '<i>Overview of Hong Kong Cancer Statistics of 2018.</i> Hong Kong Hospital Authority, October 2020.',
  },
  {
    content:
      '“癌者治療後易出現口腔副作用，四成受訪者感口腔有鐵鏽味.” <i>HK01,</i> 2021, www.hk01.com/18%E5%8D%80%E6%96%B0%E8%81%9E/623584/%E7%99%8C%E8%80%85%E6%B2%BB%E7%99%82%E5%BE%8C%E6%98%93%E5%87%BA%E7%8F%BE%E5%8F%A3%E8%85%94%E5%89%AF%E4%BD%9C%E7%94%A8-%E5%9B%9B%E6%88%90%E5%8F%97%E8%A8%AA%E8%80%85%E6%84%9F%E5%8F%A3%E8%85%94%E6%9C%89%E9%90%B5%E9%8F%BD%E5%91%B3',
  },
  {
    content:
      'Chua, Melvin L. K., et al. “Nasopharyngeal Carcinoma.” <i>The Lancet</i>, vol. 387, no. 10022, 2016, pp. 1012–24.',
  },
  {
    content:
      'Chan, K. C. Allen, et al. “Analysis of Plasma Epstein–Barr Virus DNA to Screen for Nasopharyngeal Cancer.” <i>New England Journal of Medicine,</i> vol. 377, no. 6, 2017, pp. 513–22.',
  },
  {
    content:
      '認識癌症：鼻咽癌. Hong Kong Cancer Fund, 2021, www.cancer-fund.org/wp-content/uploads/2021/03/NPC-20C-Revamp-Web_s.pdf.',
  },
  {
    content:
      'Lam, W. K. Jacky, et al. “Sequencing-Based Counting and Size Profiling of Plasma Epstein–Barr Virus DNA Enhance Population Screening of Nasopharyngeal Carcinoma.” <i>Proceedings of the National Academy of Sciences,</i> vol. 115, no. 22, 2018, pp. E5115–24.',
  },
  // {
  //   content:
  //     '一經登記，閣下將可免費成為永久會員，享用我們的Take2 Extra Care會員計劃轄下一切服務，包括線上/線下即時查詢、接收健康資訊等。',
  // },
]
