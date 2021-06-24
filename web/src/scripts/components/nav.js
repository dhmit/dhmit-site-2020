import { component } from 'picoapp'
import choozy from 'choozy'
import { add, remove } from 'martha'

export default component((node, ctx) => {
  const { links } = choozy(node)

  ctx.on('navigate', setActiveNavLinks)
  setActiveNavLinks()

  function setActiveNavLinks() {
    links.forEach((link) => {
      const href = removeTrailingSlash(link.getAttribute('href'))
      const pathname = removeTrailingSlash(window.location.pathname)
      if (href === pathname) {
        add(link, 'is-active')
      } else {
        remove(link, 'is-active')
      }
    })
  }
})

function removeTrailingSlash(str) {
  return str[str.length - 1] === '/' ? str.slice(0, -1) : str
}
