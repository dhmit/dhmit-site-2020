import 'focus-visible'
import app from '@/app'
import router from '@/router'
import { ready, on, size } from '@/util/dom'
import gsap from 'gsap'

ready(() => {
  // Broadcast window resize events
  on(window, 'resize', resize)

  // Setup global raf loop
  gsap.ticker.add(tick)

  // Mount picoapp
  app.mount()

  // Propagate an initial resize event
  resize()

  router.on('NAVIGATE_IN', () => {
    app.unmount()
    app.mount()
    resize()
  })

  function resize() {
    app.emit('resize', size())
  }

  function tick() {
    app.emit('tick')
  }
})
