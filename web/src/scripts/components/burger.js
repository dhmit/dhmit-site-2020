import { component } from 'picoapp'
import { on, toggle, body } from '@/util/dom'

export default component((node, ctx) => {
  let offClick = on(node, 'click', () => {
    const prevState = ctx.getState()
    toggle(body, 'is-nav-open')
    node.setAttribute(
      'aria-label',
      `${prevState.isNavOpen ? 'Open' : 'Close'} Navigation`,
    )
    ctx.emit('burger:toggle', { isNavOpen: !prevState.isNavOpen })
  })

  return offClick
})
