import { component } from 'picoapp'
import choozy from 'choozy'
import { on } from 'martha'
import router from '@/router'

export default component((node) => {
  const { buttons } = choozy(node)

  let off = on(buttons, 'click', ({ currentTarget: button }) => {
    if (button.dataset.target) {
      const { origin, pathname } = window.location
      const target = parseInt(button.dataset.target)
      const parts = pathname.split('/').filter((x) => !!x)
      const last = parseInt(parts[parts.length - 1], 10)
      const isNumber = typeof last === 'number' && !isNaN(last)
      const index = isNumber ? parts.length - 1 : parts.length
      parts[index] = target !== 1 ? target : null
      router.redirect(`${origin}/${parts.filter((x) => !!x).join('/')}/`)
    }
  })

  return off
})
