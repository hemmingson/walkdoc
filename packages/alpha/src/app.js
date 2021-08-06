import box from '../lib'
import { router } from '../lib'

import Prism from 'prismjs'
import twemoji from 'twemoji'

import P from './controllers/page'
import theme from './controllers/mode'
import Aside from './components/Aside'
import Switch from './components/Switch'
import Content from './components/Content'

const app = (
  <div id="root">
    <Switch />
    <Aside src={P} />
    <Content
      src={
        P[P?.current]?.src ||
        P.find((i) => i.title === router.getPathnameStr())?.src ||
        P[0].src
      }
    />
  </div>
)

;(() => {
  window.$ = document.querySelector.bind(document)
  $('body').appendChild(app)
  Prism.highlightAll()
  twemoji.parse($('body'), {
    folder: 'svg',
    ext: '.svg',
  })
  router.isRoot() && router.redirectTo(P[0].title)
})()

const mode = $('.btn-mode')

const isDark = window.localStorage.getItem('mode')
  ? window.localStorage.getItem('mode') === 'dark'
  : window.matchMedia('(prefers-color-scheme: dark)').matches

mode.dataset.mode = isDark ? 'dark' : 'light'
mode.textContent = isDark ? '\u{1F55F}' : '\u{1F558}'
theme(mode.dataset.mode)
