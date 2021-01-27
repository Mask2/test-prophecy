/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import classnames from "classnames"

import styles from "./ProphecySteps.module.css"

const ProphecySteps = () => {
  const [current, setCurrent] = useState(null)
  return (
    <div className={styles.wrapper}>
      <div
        className={classnames(
          styles.stepCard,
          current === 1 ? styles.active : ""
        )}
        onMouseEnter={e => setCurrent(1)}
        onMouseLeave={e => setCurrent(null)}
      >
        1
      </div>
      <div
        className={classnames(
          styles.stepCard,
          current === 2 ? styles.active : ""
        )}
        onMouseEnter={e => setCurrent(2)}
        onMouseLeave={e => setCurrent(null)}
      >
        2
      </div>{" "}
      <div
        className={classnames(
          styles.stepCard,
          current === 3 ? styles.active : ""
        )}
        onMouseEnter={e => setCurrent(3)}
        onMouseLeave={e => setCurrent(null)}
      >
        3
      </div>{" "}
      <div
        className={classnames(
          styles.stepCard,
          current === 4 ? styles.active : ""
        )}
        onMouseEnter={e => setCurrent(4)}
        onMouseLeave={e => setCurrent(null)}
      >
        4
      </div>
    </div>
  )
}

export default ProphecySteps
