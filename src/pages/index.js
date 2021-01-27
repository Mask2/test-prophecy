/** @jsx jsx */
import React from "react"
// import { Link } from "gatsby"
import { jsx } from "theme-ui"
import scrollTo from "gatsby-plugin-smoothscroll"
import SEO from "../components/seo"
import ProphecySteps from "../components/ProphecySteps/ProphecySteps"
import styles from "./index.module.css"

import HomeVideo from "../assets/videos/home_video_3.mp4"
import mouseButton from "../assets/images/download.png"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={styles.slidersContainer}>
      <video className={styles.videoItem} autoPlay loop muted playsInline>
        <source src={HomeVideo} type="video/mp4" />
      </video>
      <img
        className={styles.mouseButton}
        onClick={() => scrollTo("#main")}
        src={mouseButton}
        alt=""
      />
    </div>
    <div id="main" className={styles.main} sx={{ color: "text" }}>
      <div className={styles.wrapper}>
        <section>
          <div className={styles.secTitle}>
            <h1>篩查四部曲</h1>
            <p>
              透過簡單篩查四部曲，讓人人有「鼻」無患，提高成功治愈鼻咽癌的機會。
            </p>
          </div>
          <ProphecySteps></ProphecySteps>
        </section>
      </div>
    </div>
  </>
)

export default IndexPage
