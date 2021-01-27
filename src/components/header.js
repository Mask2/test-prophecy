/** @jsx jsx */
import { Link } from "gatsby"
import React, { useState } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Waypoint } from "react-waypoint"
import styles from "./header.module.css"

import logo from "../assets/images/taketwologo_2.png"

const Header = ({ siteTitle }) => {
  const [bgColor, setBgColor] = useState("none")
  return (
    <>
      <Waypoint
        onEnter={() => setBgColor("")}
        onLeave={() => setBgColor("primary")}
      ></Waypoint>
      <header
        className={styles.header}
        sx={{
          bg: bgColor,
          color: "text",
        }}
      >
        <div className={styles.wrapper}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
