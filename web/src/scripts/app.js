import { picoapp } from 'picoapp'
import { size } from '@/util/dom'

import anchors from '@/components/anchors'
import burger from '@/components/burger'
import lazyImage from '@/components/lazyImage'
import accordion from '@/components/accordion'

const components = {
  anchors,
  burger,
  lazyImage,
  accordion,
}

const state = {
  ...size(),
  isNavOpen: false,
}

export default picoapp(components, state)
