import { component } from 'picoapp'
import choozy from 'choozy'
import { has } from 'martha'

export default component((node) => {
  const { links } = choozy(node)

  links.forEach((link) => {
    if (has(link, 'is-active')) {
      link.scrollIntoView({ inline: 'center' })
    }
  })

  return () => {}
})
