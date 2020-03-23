import { component } from 'picoapp'
import { on, toggle as toggleClass, body } from '@/util/dom'

export default component((node, ctx) => {
  ctx.on('burger:toggle', toggle)

  let offClick = on(node, 'click', () => {
    ctx.emit('burger:toggle')
  })

  function toggle(prevState) {
    toggleClass(body, 'is-nav-open')

    node.setAttribute(
      'aria-label',
      `${prevState.isNavOpen ? 'Open' : 'Close'} Navigation`,
    )

    ctx.hydrate({ isNavOpen: !prevState.isNavOpen })
  }

  return offClick
})
