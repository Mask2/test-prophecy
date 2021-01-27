/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"

import styles from "./ProphecySteps.module.css"

const ProphecySteps = () => {
  const [current, setCurrent] = useState(null)
  const data = useStaticQuery(graphql`
    query {
      allProphecyStepsJson {
        nodes {
          id
          title
          content
          video
        }
      }
    }
  `)
  return (
    <div className={styles.wrapper}>
      {data.allProphecyStepsJson.nodes.map((item, index) => (
        <div
          key={item.id}
          className={classnames(
            styles.stepCard,
            current === index ? styles.active : ""
          )}
          onMouseEnter={e => setCurrent(index)}
          onMouseLeave={e => setCurrent(null)}
        >
          index
        </div>
      ))}
    </div>
  )
}

export default ProphecySteps
