import { component } from 'picoapp'
import choozy from 'choozy'
import { on } from '@/util/dom'
import { wrap } from '@/util/math'
import gsap from 'gsap'

export default component((node, ctx) => {
  // select dom elements
  const { buttons, lines, slides } = choozy(node)

  // grab dynamic autoplay duration value
  const autoplayDuration = parseInt(node.dataset.autoplayDuration)

  // store the duration of our animation for use later
  const tweenDuration = 0.5

  // create a gsap timeline instance
  const tl = gsap.timeline()

  // setup local state
  let previousSlideIndex = null
  let currentSlideIndex = 0
  let isAutoplayEnabled = true
  let isTransitioning = false

  // subscribe to global resize event
  ctx.on('resize', resize)

  // subscribe to button click events
  const offClick = on(buttons, 'click', ({ currentTarget: t }) => {
    if (isTransitioning) return

    // disable autoplay after user interacts with the carousel
    isAutoplayEnabled = false

    // grab the index of the clicked button
    const selectedIndex = parseInt(t.dataset.index)

    if (selectedIndex === currentSlideIndex) return

    setSlideIndex(selectedIndex)
  })

  // set initial styles and kick things off
  setInitialStyles()
  setSlideIndex(currentSlideIndex)

  function setSlideIndex(index) {
    // update local state
    isTransitioning = true
    previousSlideIndex = currentSlideIndex
    currentSlideIndex = index

    // save refs to the elements we want to animate
    const prevSlide = slides[previousSlideIndex]
    const prevLine = lines[previousSlideIndex]
    const slide = slides[currentSlideIndex]
    const line = lines[currentSlideIndex]

    // clear any in progress tweens
    tl.clear()

    // animate out previous slide (if there is one)
    if (previousSlideIndex > -1) {
      // line only needs to be animated out when autoplay is already disabled
      if (!isAutoplayEnabled) {
        tl.set(prevLine, { transformOrigin: 'right' }).to(
          prevLine,
          {
            duration: tweenDuration,
            scaleX: 0,
            ease: 'quart',
          },
          'leave',
        )
      }

      // fade out the previous slide
      tl.to(
        prevSlide,
        {
          duration: tweenDuration,
          y: -10,
          autoAlpha: 0,
          ease: 'quart',
        },
        'leave',
      )
    }

    // animate in the selected slide
    // scale up line
    tl.set(line, { transformOrigin: 'left' })
      .to(
        line,
        {
          duration: tweenDuration,
          scaleX: 1,
          ease: 'quart',
        },
        'enter',
      )
      // fade in slide
      .fromTo(
        slide,
        {
          y: 10,
          autoAlpha: 0,
        },
        {
          duration: tweenDuration,
          y: 0,
          autoAlpha: 1,
          ease: 'quart',
          onComplete: () => {
            isTransitioning = false
            // if autoplay is still enabled when tween is complete
            if (isAutoplayEnabled) {
              // kick off progress bar animation
              animateProgress()
            }
          },
        },
        'enter',
      )
  }

  function animateProgress() {
    const line = lines[currentSlideIndex]

    tl.set(line, {
      transformOrigin: 'right',
    }).to(line, {
      // here's where we use the dynamic autoplayDuration value
      // converting from milliseconds to seconds
      duration: autoplayDuration / 1000,
      scaleX: 0,
      ease: 'linear',
      onComplete: () => {
        // when complete, go to the next slide
        nextSlide()
      },
    })
  }

  // helper function to increment the slide
  function nextSlide() {
    setSlideIndex(wrap(currentSlideIndex + 1, slides.length))
  }

  // on resize, we need to set the height of the entire carousel element to be
  // equal to the tallest slide
  function resize() {
    let maxHeight = 0
    slides.forEach((slide) => {
      const height = slide.offsetHeight
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
