import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import getTheme from './src/themes'
import Layout from './src/components/Layout'

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={getTheme('light')}>{element}</ThemeProvider>
}

export { wrapPageElement, wrapRootElement }
