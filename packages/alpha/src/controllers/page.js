import { createProxy } from '../../lib'

import mds from '../md'

const handler = {
  set(t, _, i) {
    $('#content').innerHTML = t[i].src
    Prism.highlightAll()
    return true
  },
}

const P = createProxy(mds, handler)

export default P
