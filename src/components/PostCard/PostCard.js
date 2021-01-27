/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import classnames from "classnames"
import HoverBox from "../HoverBox/HoverBox"

import styles from "./PostCard.module.css"

const PostCard = props => (
  <Link to={props.path}>
    <img src={props.image} alt="" />
    <HoverBox
      title={props.title}
      date={props.date}
      auth={props.auth}
    ></HoverBox>
  </Link>
)

export default PostCard
