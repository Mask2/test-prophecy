/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"

import styles from "./footer.module.css"
import logo from "../assets/images/taketwologo_2.png"

const Footer = () => (
  <footer className={styles.footer} sx={{ bg: "primary", color: "text" }}>
    <div className={styles.wrapper}>
      <dl className={styles.content}>
        <div
          className={styles.list}
          sx={{
            width: ["100%", "25%"],
          }}
        >
          <dt>
            <img className={styles.logo} src={logo} alt="" />
          </dt>
        </div>
        <div
          className={styles.list}
          sx={{
            width: ["100%", "25%"],
          }}
        >
          <dd>
            <Link to="/">企業背景</Link>
          </dd>
          <dd>
            <Link to="/">早期鼻咽癌篩查</Link>
          </dd>
          <dd>
            <Link to="/">健康資訊</Link>
          </dd>
          <dd>
            <Link to="/">最新動態及推廣</Link>
          </dd>
          <dd>
            <Link to="/">服務覆蓋點</Link>
          </dd>
        </div>
        <div
          className={styles.list}
          sx={{
            width: ["100%", "25%"],
          }}
        >
          <dd>
            <Link to="/">加入我們</Link>
          </dd>
          <dd>
            <Link to="/">聯絡我們</Link>
          </dd>
        </div>
        <div
          className={styles.list}
          sx={{
            width: ["100%", "25%"],
          }}
        >
          <dt>聯絡資料</dt>
          <dd>(852) 3613 0533</dd>
          <dd>info@take2.health</dd>
        </div>
      </dl>
      <div className={styles.divider}></div>
      <div
        className={styles.copyright}
        sx={{
          pb: ["12px", "70px"],
        }}
      >
        © {new Date().getFullYear()}, Take2 Prophecy™ 版權所有
        <Link to="/">私隱政策</Link>
      </div>
    </div>
  </footer>
)

export default Footer
