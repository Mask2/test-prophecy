/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"

import styles from "./ProphecySteps.module.css"

const ProphecySteps = () => {
  const [current, setCurrent] = useState(0)
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
          className={styles.stepCard}
          onMouseEnter={e => setCurrent(index)}
          onMouseLeave={e => setCurrent(null)}
        >
          <div
            className={classnames(
              styles.videoWrapper,
              current === index ? styles.active : ""
            )}
          >
            <video className={styles.videoItem} autoPlay loop muted playsInline>
              <source src={item.video} type="video/mp4" />
            </video>
          </div>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.content}>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ProphecySteps
