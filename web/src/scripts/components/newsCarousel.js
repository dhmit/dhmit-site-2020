import { component } from 'picoapp'
import choozy from 'choozy'
import EmblaCarousel from 'embla-carousel'
import { add, remove, on } from 'martha'

export default component((node, ctx) => {
  const { slider, dots } = choozy(node)

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
    events.forEach((off) => off())
  }
})
