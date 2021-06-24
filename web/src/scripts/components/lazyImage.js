import { component } from 'picoapp'
import choozy from 'choozy'
import { on, add } from 'martha'

export default component((node) => {
  const { img, imgWrap, lqip } = choozy(node)

  img.onload = () => {
    img.onload = null
    requestAnimationFrame(() => {
      add(node, 'is-loaded')
      let off = on(imgWrap, 'transitionend', () => {
        off()
        lqip.remove()
      })
      img.removeAttribute('data-src')
    })
  }

  img.src = img.dataset.src
})
