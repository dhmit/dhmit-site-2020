import { component } from 'picoapp'
import choozy from 'choozy'
import { on } from 'martha'
import router from '@/router'

export default component((node, ctx) => {
  const { buttons } = choozy(node)

  const events = buttons.map((button) =>
    on(button, 'click', (ev) => {
      if (button.dataset.target) {
        const target = parseInt(button.dataset.target)
        const { origin, pathname } = window.location
        let parts = pathname.split('/').filter((x) => !!x)
        parts[2] = target !== 1 ? target : null
        parts = parts.filter((x) => !!x)
        router.redirect(`${origin}/${parts.join('/')}/`)
      }
    }),
  )

  return () => {
    events.map((off) => off())
  }
})
