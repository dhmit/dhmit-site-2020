import { component } from 'picoapp'
import choozy from 'choozy'
import EmblaCarousel from 'embla-carousel'
import { add, remove, on } from 'martha'

export default component((node, ctx) => {
  let { slider, dots } = choozy(node)

  // ensure dots is always an array even if there is only 1 element
  dots = [].concat(dots)

  const embla = EmblaCarousel(slider, {
    align: 'center',
    speed: 15,
    loop: true,
  })

  embla.on('select', () => {
    const selectedIndex = embla.selectedScrollSnap()
    dots.forEach((dot, index) => {
      if (index === selectedIndex) {
        add(dot, 'bg-gold')
      } else {
        remove(dot, 'bg-gold')
      }
    })
  })

  const events = []
  dots.forEach((dot, index) => {
    const off = on(dot, 'click', () => embla.scrollTo(index))
    events.push(off)
  })

  return () => {
    events.map((off) => off())
  }
})
