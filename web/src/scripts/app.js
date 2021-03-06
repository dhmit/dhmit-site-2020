import { picoapp } from 'picoapp'
import { size } from 'martha'

import nav from '@/components/nav'
import burger from '@/components/burger'
import lazyImage from '@/components/lazyImage'
import slider from '@/components/slider'
import aboutCarousel from '@/components/aboutCarousel'
import newsCarousel from '@/components/newsCarousel'
import accordion from '@/components/accordion'
import newsletter from '@/components/newsletter'
import filters from '@/components/filters'

const components = {
  nav,
  burger,
  lazyImage,
  slider,
  aboutCarousel,
  newsCarousel,
  accordion,
  newsletter,
  filters,
}

const state = {
  ...size(),
  isNavOpen: false,
  aboutCarouselIndex: 0,
}

export default picoapp(components, state)
