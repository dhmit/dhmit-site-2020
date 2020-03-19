import { picoapp } from 'picoapp'
import burger from '@/components/burger'
import lazyImage from '@/components/lazyImage'
import accordion from '@/components/accordion'

const components = {
  burger,
  lazyImage,
  accordion,
}

const state = {
  isNavOpen: false,
}

export default picoapp(components, state)
