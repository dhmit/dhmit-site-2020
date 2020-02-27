import { picoapp } from 'picoapp'
import burger from '@/components/burger'
// import mobileNav from '@/components/mobileNav'

const components = {
  burger,
  // mobileNav,
}

const state = {
  isNavOpen: false,
}

export default picoapp(components, state)
