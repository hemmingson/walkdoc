const ROOT_PATHNAME = '/'

const isRoot = () => location.pathname === ROOT_PATHNAME

const redirectTo = (path, state = null, title = null) => {
  history.replaceState(state, title, path)
}

const navigateTo = (path, config = null) => {
  if (!config) {
    history.replaceState(null, null, path)
    return
  }

  const { payload, title } = config
  history.replaceState(payload, title, path)
}

const getPathnameStr = () => location.pathname.slice(1)

export { isRoot, redirectTo, navigateTo, getPathnameStr }
