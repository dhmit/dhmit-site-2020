import { picoapp } from 'picoapp'
import burger from '@/components/burger'
import lazyImage from '@/components/lazyImage'

const components = {
  burger,
  lazyImage,
}

const state = {
  isNavOpen: false,
}

export default picoapp(components, state)
