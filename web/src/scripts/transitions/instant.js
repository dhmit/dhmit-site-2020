import Highway from '@dogstudio/highway'
import app from '@/app'

class Instant extends Highway.Transition {
  in({ from, done }) {
    window.scrollTo(0, 0)
    from.remove()
    done()
  }

  out({ done }) {
    app.emit('navigate')

    if (app.getState().isNavOpen) {
      app.emit('burger:toggle')
    }

    done()
  }
}

export default Instant
