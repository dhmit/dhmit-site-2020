import { component } from 'picoapp'
import EmblaCarousel from 'embla-carousel'
import { on } from '@/util/dom'
import router from '@/router'

export default component((node, ctx) => {
  const embla = EmblaCarousel(node, {
    dragFree: true,
    containScroll: true,
    align: 'start',
  })

  const slides = embla.slideNodes()

  const onSlideClick = (index) => (ev) => {
    if (embla.clickAllowed()) {
      const link = ev.currentTarget.querySelector('a')
      const href = link.getAttribute('href')
      router.redirect(location.origin + href)
    }
  }

  slides.forEach((slide, index) => {
    const onSlideClickIndex = onSlideClick(index)
    on(slide, 'click', onSlideClickIndex)
  })
})
