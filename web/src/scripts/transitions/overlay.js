import Highway from '@dogstudio/highway'
import app from '@/app'
import gsap from 'gsap'

class Overlay extends Highway.Transition {
  // because our modal needs to overlap the landing page, we
  // need to skip the OUT transition hook and handle all animations
  // during the IN transition hook which occurs after the new page
  // html has been fetched and added to the dom
  out({ done }) {
    done()
  }

  in({ from, to, done }) {
    // check if the new page is a 'modal' or not
    const isDestinationModal = to.dataset.routerView === 'modal'

    // if it is, we need to animate in the modal
    if (isDestinationModal) {
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
            // remove previous page container
            from.remove()
          },
        },
      )
    } else {
      // restore previous landing page scroll destination to create the illusion
      // that the modal was just an overlay on top of the previous page
      const { windowHeight, percentScrolled } = app.getState()

      to.scrollTop =
        (to.firstElementChild.offsetHeight - windowHeight) * percentScrolled

      // fade out the modal
      gsap.to(from, {
        duration: 0.3,
        autoAlpha: 0,
        ease: 'cubic',
        onComplete: () => {
          done()
          // remove previous page container
          from.remove()
        },
      })
    }
  }
}

export default Overlay
