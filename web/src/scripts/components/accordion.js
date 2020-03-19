import { component } from 'picoapp'
import squeezebox from '@/lib/squeezebox'

export default component((node, ctx) => {
  const accordion = squeezebox(node, { openMultiple: true })

  ctx.on('resize', accordion.resize)
  accordion.resize()

  return () => {
    accordion.unmount()
  }
})
