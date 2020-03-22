import { picoapp } from 'picoapp'
import { size } from '@/util/dom'

import anchors from '@/components/anchors'
import burger from '@/components/burger'
import lazyImage from '@/components/lazyImage'
import aboutCarousel from '@/components/aboutCarousel'
import accordion from '@/components/accordion'

const components = {
  anchors,
  burger,
  lazyImage,
  aboutCarousel,
  accordion,
}

const state = {
  ...size(),
  isNavOpen: false,
  aboutCarouselIndex: 0,
  percentScrolled: 0,
}

export default picoapp(components, state)
