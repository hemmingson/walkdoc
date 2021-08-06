const proxies = new WeakSet()

const createProxy = (t, h) => {
  const proxy = new Proxy(t, h)
  proxies.add(proxy)
  return proxy
}

export default createProxy
