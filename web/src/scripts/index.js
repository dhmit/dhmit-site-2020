import 'focus-visible'
import app from '@/app'
import router from '@/router'
import { ready, on, size } from '@/util/dom'
import { Render } from '@oframe/animate'

ready(() => {
  on(window, 'resize', resize)

  Render.start(update)

  app.mount()

  router.on('NAVIGATE_IN', () => {
    app.unmount()
    app.mount()
  })

  function resize() {
    app.emit('resize', size())
  }

  function update() {
    app.emit('tick')
  }
})
