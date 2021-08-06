import M from '../models/theme.json'

const root = document.documentElement

const theme = (mode) => {
  root.style.setProperty('--background-color', M[mode].background)
  root.style.setProperty('--font-color', M[mode].font)
  root.style.setProperty('--pre-color', M[mode].pre)
  root.style.setProperty('--primary-color', M[mode].primary)
}

export default theme
