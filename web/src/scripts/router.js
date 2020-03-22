import Highway from '@dogstudio/highway'
import overlay from '@/transitions/overlay'

export default new Highway.Core({
  renderers: {},
  transitions: {
    default: overlay,
  },
})
