import { component } from 'picoapp'
import { on, add, remove } from '@/util/dom'
import gsap from 'gsap'

export default component((node, ctx) => {
  const header = node.querySelector('.header')
  const links = Array.from(node.querySelectorAll('a[href^="#"]'))
  const sections = Array.from(node.querySelectorAll('section'))

  let isAnimating = false

  const offClick = on(links, 'click', (ev) => {
    ev.preventDefault()

    if (isAnimating) return

    isAnimating = true

    const id = ev.currentTarget.getAttribute('href')
    const targetEl = node.querySelector(id)
    const scroll = { y: node.scrollTop }
    const offsetY = id === '#intro' ? 0 : header.offsetHeight
    const targetY = targetEl.offsetTop - offsetY

    setActiveLinks(targetEl, links)

    gsap.to(scroll, {
      duration: 0.7,
      y: targetY,
      ease: 'cubic.inOut',
      onUpdate: () => (node.scrollTop = scroll.y),
      onComplete: () => {
        isAnimating = false
      },
    })
  })

  ctx.on('tick', ({ windowHeight }) => {
    if (isAnimating) return

    sections.forEach((section, i) => {
      const bounds = section.getBoundingClientRect()
      const top = bounds.top
      const bottom = bounds.top + bounds.height
      const threshold = windowHeight * 0.5
      if (top < threshold && bottom > threshold) {
        setActiveLinks(section, links)
      }
    })

    const percentScrolled =
      node.scrollTop / (node.firstElementChild.offsetHeight - windowHeight)

    ctx.hydrate({ percentScrolled })
  })

  return () => {
    offClick()
  }
})

function setActiveLinks(section, links) {
  const activeLinks = links.filter(
    (l) => l.getAttribute('href').slice(1) === section.id,
  )

  remove(links, 'is-active')
  add(activeLinks, 'is-active')
}
