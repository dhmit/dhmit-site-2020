import Highway from '@dogstudio/highway'
import app from '@/app'
import gsap from 'gsap'

class Overlay extends Highway.Transition {
  in({ from, to, done }) {
    const toView = to.dataset.routerView

    if (toView === 'modal') {
      const inner = to.querySelector('.js-inner')
      gsap.fromTo(
        to,
        {
          autoAlpha: 0,
        },
        {
          duration: 0.3,
          autoAlpha: 1,
          ease: 'cubic',
        },
      )

      gsap.fromTo(
        inner,
        {
          y: 75,
        },
        {
          duration: 0.6,
          y: 0,
          ease: 'quart',
          onComplete: () => {
            done()
            from.remove()
          },
        },
      )
    } else {
      const { windowHeight, percentScrolled } = app.getState()
      to.scrollTop =
        (to.firstElementChild.offsetHeight - windowHeight) * percentScrolled

      gsap.to(from, {
        duration: 0.3,
        autoAlpha: 0,
        ease: 'cubic',
        onComplete: () => {
          done()
          from.remove()
        },
      })
    }
  }

  out({ done }) {
    done()
  }
}

export default Overlay
