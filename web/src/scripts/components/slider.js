import { component } from 'picoapp'
import choozy from 'choozy'
import EmblaCarousel from 'embla-carousel'
import { qs, rect, on } from 'martha'
import router from '@/router'
import gsap from 'gsap'

export default component((node, ctx) => {
  const refs = choozy(node)

  const prevButton = refs.buttons.find((button) =>
    button.dataset.hasOwnProperty('prev'),
  )

  const nextButton = refs.buttons.find((button) =>
    button.dataset.hasOwnProperty('next'),
  )

  const embla = EmblaCarousel(refs.slider, {
    dragFree: true,
    containScroll: true,
    align: 'start',
    speed: 15,
  })

  const slides = embla.slideNodes()

  const onSlideClick = (ev) => {
    if (embla.clickAllowed()) {
      const link = ev.currentTarget.querySelector('a')
      const href = link.getAttribute('href')
      router.redirect(location.origin + href)
    }
  }

  const events = slides.map((slide) => on(slide, 'click', onSlideClick))

  ctx.on('resize', () => {
    const top = `${rect(qs('.lazy-image')).height / 2}px`
    refs.buttons.forEach((button) => {
      button.style.top = top
    })
  })

  events.concat(
    refs.buttons.map((button) =>
      on(button, 'click', ({ currentTarget: t }) => {
        if (t.dataset.hasOwnProperty('next')) {
          embla.scrollNext()
        }

        if (t.dataset.hasOwnProperty('prev')) {
          embla.scrollPrev()
        }
      }),
    ),
  )

  embla.on('select', handleSelect)

  function handleSelect() {
    embla.canScrollPrev() ? enable(prevButton) : disable(prevButton)
    embla.canScrollNext() ? enable(nextButton) : disable(nextButton)
  }

  function enable(button) {
    button.removeAttribute('disabled')
    gsap.to(button.closest('.js-wrap'), {
      duration: 0.3,
      autoAlpha: 1,
      ease: 'cubic',
    })
  }

  function disable(button) {
    button.setAttribute('disabled', 'disabled')
    gsap.to(button.closest('.js-wrap'), {
      duration: 0.3,
      autoAlpha: 0,
      ease: 'cubic',
    })
  }

  return () => {
    events.forEach((off) => off())
    embla.off('select', handleSelect)
  }
})
