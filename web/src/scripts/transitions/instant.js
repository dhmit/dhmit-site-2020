import Highway from '@dogstudio/highway'

class Fade extends Highway.Transition {
  in({ from, done }) {
    window.scrollTo(0, 0)
    from.remove()
    done()
  }

  out({ done }) {
    done()
  }
}

export default Fade
