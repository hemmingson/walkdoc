import box from '../../lib'
import theme from '../controllers/mode'

const iconMap = {
  0: '\u{1F558}',
  1: '\u{1F55F}',
}
const textMap = ['dark', 'light']

const Switch = () => {
  const handleSwitch = (e) => {
    const cur = textMap.findIndex((ele) => ele === e.target.dataset.mode)
    e.target.textContent = iconMap[cur]

    const tmp = 1 - cur
    e.target.dataset.mode = textMap[tmp]
    window.localStorage.setItem('mode', textMap[tmp])

    theme(textMap[tmp])
  }

  return <span className="btn-mode" onclick={handleSwitch}></span>
}

export default Switch
