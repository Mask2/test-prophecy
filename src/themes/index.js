import light from './_lightMuiTheme'
import dark from './_darkMuiTheme'

const themes = {
  light,
  dark,
}

const getTheme = (theme) => {
  return themes[theme]
}

export default getTheme
