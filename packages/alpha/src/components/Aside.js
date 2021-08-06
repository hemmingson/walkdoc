import box from '../../lib'
import { router } from '../../lib'

import Icon from './Icon'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>
`

const Aside = ({ src }) => {
  const handleSelect = (e) => {
    if (e.target.nodeName === 'LI') {
      const selected = $('[data-selected="1"]')
      selected.setAttribute('data-selected', 0)

      e.target.dataset.selected = 1
      router.navigateTo(e.target.route)
      src.current = e.target.dataset.index
    }
  }

  return (
    <aside>
      <span className="btn-menu">
        <Icon svg={svg} />
      </span>

      <div className="toc">
        <ol start="0" onclick={handleSelect}>
          {src.map((el, idx) => (
            <li
              data-selected={
                router.isRoot()
                  ? idx === 0
                    ? 1
                    : 0
                  : el.title === router.getPathnameStr()
                  ? 1
                  : 0
              }
              data-index={idx}
              route={el.title}
            >
              {el.title}
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}

export default Aside
