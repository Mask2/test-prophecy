/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, Grid, Box } from 'theme-ui';
import { withPrefix } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ProphecySteps from '/src/components/ProphecySteps/ProphecySteps';
import styles from './take2prophecy.module.css';
import HoverBox from '/src/components/HoverBox/HoverBox';
import MenuData from '/src/data/menu.json';
import InevitableData from '/src/data/inevitableInfo.json';
import FeaturesData from '/src/data/featuresInfo.json';
import TechnologyData from '/src/data/technologyInfo.json';

const introductionPage = ({ location }) => {
  const [curMenu, setCurMenu] = useState([]);
  const [curTec, setCurTec] = useState(0);
  useEffect(() => {
    setCurMenu(MenuData.find((menu) => menu.path === withPrefix(location.pathname))?.children || []);
  }, [location.pathname]);
  return (
    <div className={styles.wrapper} sx={{ backgroundImage: 'gradientMuted' }}>
      <div
        sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', py: 6, mx: 'auto', maxWidth: 'maxWidth' }}
      >
        {curMenu.map((child) => (
          <HoverBox
            key={child.path}
            sxx={{
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 2,
              fontWeight: 'bold',
              flexGrow: 1,
              minWidth: '300px',
              mx: 4,
              mb: 6,
              boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              scrollTo(`#${child.id}`);
            }}
          >
            {child.name}
          </HoverBox>
        ))}
      </div>
      <section id={curMenu[0]?.id} sx={{ mx: 'auto', maxWidth: 'maxWidth', color: 'text' }}>
        <h1 sx={{ textAlign: 'center', pt: 7, fontWeight: 'body' }}>甚麼是 Take2 Prophecy™</h1>
        <p>Take2 Prophecy™ 是一項鼻咽癌早期篩查測試，適用群體包括常規體檢者、無症狀人士，及有疑似症狀人士等。</p>
        <p>
          在鼻咽癌發展到晚期之前，許多患者沒有明顯患癌病徵。在沒有進行有效早期篩查的患者中，大約80%在初診時已患上晚期鼻咽癌¹。為了實現早期檢測，Take2
          Prophecy™ 應用了最新的基因檢測技術，檢測血液中由癌細胞衍生的DNA，分析人類和 EB 病毒的 DNA
          與鼻咽癌相關之特徵²。
        </p>
        <p>透過此技術進行早期鼻咽癌篩查，能讓患者儘早發現，是大大提高患者成功治癒機會的一個有效方法¹。 Take2</p>
        <a
          sx={{ color: 'text', fontSize: 1 }}
          href='https://www.prophecy.health/extracare%e7%9a%84%e7%a7%81%e9%9a%b1%e6%94%bf%e7%ad%96/'
        >
          ExtraCare的私隱政策
        </a>
      </section>
      <section id={curMenu[1]?.id} sx={{ mx: 'auto', pt: 6, maxWidth: 'maxWidth', color: 'text' }}>
        <ProphecySteps />
      </section>
      <section id={curMenu[2]?.id} sx={{ color: 'text', py: 7 }}>
        <div sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
          <h2 sx={{ textAlign: 'center', fontWeight: 'body', my: 5 }}>{InevitableData.title}</h2>
          <p>{InevitableData.description}</p>
          {InevitableData.data.map((list, index) => (
            <div key={`list_${index}`} className={styles.progressWrapper}>
              {list.map((item) => (
                <div key={item.name} className={styles.progressItem}>
                  <img className={styles.progressIcon} src={item.img} alt='' />
                  <div className={styles.progressName}>{item.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section id={curMenu[3]?.id} sx={{ color: 'text', bg: 'light', py: 7 }}>
        <div sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
          <h1 sx={{ textAlign: 'center', fontWeight: 'body', my: 6 }}>{FeaturesData.title}</h1>
          <p>{FeaturesData.description}</p>
          {FeaturesData.data.map((list, index) => (
            <div key={`list_${index}`} className={styles.progressWrapper} sx={{ my: 5 }}>
              {list.map((item) => (
                <div key={item.name} className={styles.progressItem}>
                  <img className={styles.progressIcon} src={item.img} alt='' />
                  <div className={styles.progressName} sx={{ fontSize: 3 }}>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section id={curMenu[4]?.id} sx={{ color: 'text', py: 7 }}>
        <h1 sx={{ textAlign: 'center', fontWeight: 'body', my: 4 }}>{TechnologyData.title}</h1>
        <div sx={{ mx: 'auto', maxWidth: 'maxWidth' }}>
          <div className={styles.tecWrapper}>
            <Grid className={styles.tecNav} gap={3} columns={[2, null, 2]}>
              {TechnologyData.data.map((item, index) => (
                <Box key={item.title} className={styles.tecNavItem} onClick={() => setCurTec(index)}>
                  <img className={styles.tecNavImg} src={item.img} alt='' />
                  <HoverBox sxx={{ py: 5, color: 'primary', fontSize: 3 }}>{item.title}</HoverBox>
                </Box>
              ))}
            </Grid>
            <div className={styles.tecContent}>
              <div sx={{ color: 'secondary', fontSize: 4, mb: 3 }}>{TechnologyData.data[curTec].title}</div>
              <div sx={{ color: 'normalText', fontSize: 3, lineHeight: 2 }}>{TechnologyData.data[curTec].content}</div>
            </div>
          </div>
        </div>
      </section>
      <section id={curMenu[5]?.id} sx={{ color: 'text', py: 6, mx: 'auto', maxWidth: 'maxWidth', fontSize: 1 }}>
        <div sx={{ mb: 4 }}>參考資料</div>
        <ul sx={{ listStyle: 'decimal' }}>
          <li>
            Chan KCA, Woo JKS, King A, et al. Analysis of Plasma Epstein-Barr Virus DNA to Screen for Nasopharyngeal
            Cancer. N Engl J Med. 2017; 377(6):513-522. doi:10.1056/NEJMoa1701717.
          </li>
          <li>
            Lam WKJ, Jiang P, Chan KCA, et al. Sequencing-based counting and size profiling of plasma Epstein-Barr virus
            DNA enhance population screening of nasopharyngeal carcinoma. Proc Natl Acad Sci. 2018; 115(22):E5115-E5124.
            doi:10.1073/pnas.1804184115.
          </li>
          <li>
            Karachaliou N, Mayo-de-Las-Casas C, Molina-Vila MA, Rosell R. Real-time liquid biopsies become a reality in
            cancer treatment. Ann Transl Med 2015; 3(3):36. doi:10.3978/j.issn.2305-5839.2015.01.16.
          </li>
          <li>
            Jiang P, Sun K, Tong YK, et al. Preferred end coordinates and somatic variants as signatures of circulating
            tumor DNA associated with hepatocellular carcinoma. Proc Natl Acad Sci U S A. 2018; 115(46):E10925-E10933.
            doi:10.1073/pnas.1814616115.
          </li>
          <li>
            Vijay P, McIntyre AB, Mason CE, Greenfield JP, Li S. Clinical Genomics: Challenges and Opportunities. Crit
            Rev Eukaryot Gene Expr. 2016; 26(2):97-113. doi:10.1615/CritRevEukaryotGeneExpr.2016015724.
          </li>
          <li>
            Kwapisz D. The first liquid biopsy test approved. Is it a new era of mutation testing for non-small cell
            lung cancer? Ann Transl Med 2017; 5(3):46. doi:10.21037/atm.2017.01.32.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default introductionPage;
