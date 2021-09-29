import React from 'react'
import Seo from './Seo'

const Layout = (props) => {
  return (
    <div>
      <Seo></Seo>
      {props.children}
    </div>
  )
}

export default Layout
