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
// import CaseFemaleImg from '../images/case_female.jpg'
// import CaseMaleImg from '../images/case_male.jpg'
import CaseFemaleGif from '../images/gif/case_female.gif'
import CaseMaleGif from '../images/gif/case_male.gif'

export const WHATS_APP_LINK =
  'https://api.whatsapp.com/send/?phone=85253770823&text=Halo%2C+I+want+to+know+more+about+Prophecy+Test%21+&app_absent=0'
export const ADDRESS_LINK = '/zh/service-location/'
export const FACEBOOK_LINK = 'https://www.facebook.com/take2health.ltd'
export const E_HEALTH_LINK = 'https://take2health.net/health-platform/'
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
    label: '立即預約',
    id: 'section-seven',
    href: E_HEALTH_LINK,
    withSup: true,
  },
  {
    label: '查看篩查服務點',
    id: 'section-seven',
    href: ADDRESS_LINK,
  },
  {
    label: '服務查詢',
    id: 'section-seven',
    href: WHATS_APP_LINK,
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

export const caseListData = [
  {
    href: 'https://skypost.ulifestyle.com.hk/article/3000256/抗癌勇士｜45歲港男不煙不酒患晚期鼻咽癌%20%20%20%20歷6次化療7周電療抗癌半年康復｜附鼻咽癌5大先兆',
    image: CaseMaleGif,
  },
  {
    href: 'https://medicalinspire.com/web/posts/72927/【戰勝癌魔】80後瑜伽導師戰勝第三期鼻咽癌-感悟：「死過翻生」才明白活著多好/',
    image: CaseFemaleGif,
  },
]

export const serviceListData = [
  { label: 'service 01', img: Service01 },
  { label: 'service 02', img: Service02 },
  { label: 'service 03', img: Service03 },
  { label: 'service 04', img: Service04 },
  { label: 'service 05', img: Service05 },
]

export const postListData = [
  {
    title:
      '【戰勝癌魔】80後瑜伽導師克服第三期鼻咽癌 感悟：「死過翻生 才明白活著多好」(醫·思維)',
    url: 'https://medicalinspire.com/web/posts/72927/',
  },
  {
    title:
      ' 抗癌勇士｜45歲港男不煙不酒患晚期鼻咽癌 歷6次化療7周電療抗癌半年康復｜附鼻咽癌5大先兆(晴報)',
    url: 'https://skypost.ulifestyle.com.hk/article/3000256/%E6%8A%97%E7%99%8C%E5%8B%87%E5%A3%AB%EF%BD%9C45%E6%AD%B2%E6%B8%AF%E7%94%B7%E4%B8%8D%E7%85%99%E4%B8%8D%E9%85%92%E6%82%A3%E6%99%9A%E6%9C%9F%E9%BC%BB%E5%92%BD%E7%99%8C%20%20%20%20%E6%AD%B76%E6%AC%A1%E5%8C%96%E7%99%827%E5%91%A8%E9%9B%BB%E7%99%82%E6%8A%97%E7%99%8C%E5%8D%8A%E5%B9%B4%E5%BA%B7%E5%BE%A9%EF%BD%9C%E9%99%84%E9%BC%BB%E5%92%BD%E7%99%8C5%E5%A4%A7%E5%85%88%E5%85%86',
  },
  {
    title: '專訪耳鼻喉專科吳耀榮醫生　鼻咽原來要定期檢查？(HK01) ',
    url: 'https://www.hk01.com/%E5%81%A5%E5%BA%B7/561658/%E5%B0%88%E8%A8%AA%E8%80%B3%E9%BC%BB%E5%96%89%E5%B0%88%E7%A7%91%E5%90%B3%E8%80%80%E6%A6%AE%E9%86%AB%E7%94%9F-%E9%BC%BB%E5%92%BD%E5%8E%9F%E4%BE%86%E8%A6%81%E5%AE%9A%E6%9C%9F%E6%AA%A2%E6%9F%A5?fbclid=IwAR13gpNPgpZQtoJbfAUeSAcMEoyoHmNigxPPxFkGOCK5UQhXBpzHDqb0CIg',
  },
  {
    title: '鼻咽癌無「疫苗」？新式抽血篩查有助及早發現(AM730) ',
    url: 'https://www.am730.com.hk/news/%E7%99%8C%E7%97%87/%E9%BC%BB%E5%92%BD%E7%99%8C%E7%84%A1%E3%80%8C%E7%96%AB%E8%8B%97%E3%80%8D%EF%BC%9F-%E6%96%B0%E5%BC%8F%E6%8A%BD%E8%A1%80%E7%AF%A9%E6%9F%A5%E6%9C%89%E5%8A%A9%E5%8F%8A%E6%97%A9%E7%99%BC%E7%8F%BE-267486?fbclid=IwAR0jxa9JnGFSlokJXw5Qa7xQ5CCo68gACpM-BdSa5B6EgiG07PKp0lBdXdE',
  },
  {
    title:
      '張達明抗癌7年恍如「劫後餘生」新式抽血驗早期鼻咽癌盼幫更多同路人(晴報)',
    url: 'https://skypost.ulifestyle.com.hk/article/3002172/%E6%8A%97%E7%99%8C7%E5%B9%B4%E6%81%8D%E5%A6%82%E3%80%8C%E5%8A%AB%E5%BE%8C%E9%A4%98%E7%94%9F%E3%80%8D%20%20%E6%96%B0%E5%BC%8F%E6%8A%BD%E8%A1%80%E9%A9%97%E6%97%A9%E6%9C%9F%E9%BC%BB%E5%92%BD%E7%99%8C%E7%9B%BC%E5%B9%AB%E6%9B%B4%E5%A4%9A%E5%90%8C%E8%B7%AF%E4%BA%BA',
  },
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
  {
    content:
      '一經登記，閣下將可免費成為永久會員，享用我們的Take2 Extra Care會員計劃轄下一切服務，包括線上/線下即時查詢、接收健康資訊等。',
  },
]
