import { component } from 'picoapp'
import choozy from 'choozy'
import { on, add, remove, index } from '@/util/dom'
import { wrap } from '@/util/math'
import gsap from 'gsap'

export default component((node, ctx) => {
  const { buttons, lines, slides } = choozy(node)
  const autoplayDuration = parseInt(node.dataset.autoplayDuration)
  const tweenDuration = 0.5
  const tl = gsap.timeline()

  let prevIndex = null
  let activeIndex = 0
  let isPlaying = true

  ctx.on('resize', resize)

  const offClick = on(buttons, 'click', ({ currentTarget: t }) => {
    isPlaying = false
    setActiveSlide(index(t.parentNode))
  })

  setInitialStyles()
  setActiveSlide(activeIndex)

  function setActiveSlide(index) {
    prevIndex = activeIndex
    activeIndex = index

    const prevSlide = slides[prevIndex]
    const prevLine = lines[prevIndex]
    const slide = slides[activeIndex]
    const line = lines[activeIndex]

    tl.clear()

    // is not playing and there's a previous slide
    if (prevIndex > -1) {
      // animate line to scaleX 0 to the right
      if (!isPlaying) {
        tl.set(prevLine, { transformOrigin: 'right' }).to(
          prevLine,
          {
            duration: tweenDuration,
            scaleX: 0,
            ease: 'quart.inOut',
          },
          'leave',
        )
      }

      // fade out the prevSlide
      tl.to(
        prevSlide,
        {
          duration: tweenDuration,
          autoAlpha: 0,
          ease: 'quart.inOut',
        },
        'leave',
      )
    }

    // enter
    // line scales up from left
    tl.set(line, { transformOrigin: 'left' })
      .to(
        line,
        {
          duration: tweenDuration,
          scaleX: 1,
          ease: 'quart.inOut',
        },
        'enter',
      )
      // slide fades in
      .to(
        slide,
        {
          duration: tweenDuration,
          autoAlpha: 1,
          ease: 'quart.inOut',
          onComplete: () => {
            // if isPlaying when finished, animateProgress
            if (isPlaying) {
              animateProgress()
            }
          },
        },
        'enter',
      )
  }

  function nextSlide() {
    setActiveSlide(wrap(activeIndex + 1, slides.length))
  }

  function animateProgress() {
    const line = lines[activeIndex]

    tl.set(line, {
      transformOrigin: 'right',
    }).to(line, {
      duration: autoplayDuration / 1000,
      scaleX: 0,
      ease: 'linear',
      onComplete: () => {
        nextSlide()
      },
    })
  }

  function resize() {
    let maxHeight = 0
    slides.forEach((slide) => {
      let height = slide.offsetHeight
      if (height > maxHeight) {
        maxHeight = height
      }
    })
    node.style.height = maxHeight + 'px'
  }

  function setInitialStyles() {
    gsap.set(lines, { scaleX: 0 })
  }

  return () => {
    offClick()
  }
})
