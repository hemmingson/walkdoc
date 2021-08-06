import kebabize from './helper'

function box(type, config, ...children) {
  const el =
    typeof type === 'function' ? type(config) : document.createElement(type)

  Object.keys(config || {}).forEach((key) => {
    if (key === 'style') {
      Object.keys(config.style).forEach((attr) => {
        const key = kebabize(attr)

        el.style[key] = config.style[attr]
      })
      return
    }

    if (/^data-\w+/.test(key)) {
      el.dataset[key.slice(5)] = config[key]
      return
    }

    el[key] = config[key]
  })

  const mount = (child) => {
    if (Array.isArray(child)) {
      child.forEach((c) => mount(c))
      return
    }

    el.append(child)
  }

  children?.forEach(mount)

  return el
}

export default box
