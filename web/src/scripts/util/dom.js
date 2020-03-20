import { isArray } from './is'

/**
 * A helper function that applies the provide function to the provided
 * item or array of items
 *
 * @param  {*}          x the item or items
 * @param  {function}   fn the function to apply
 * @return {null}
 */
const apply = (x, fn) => {
  if (isArray(x)) {
    for (let i = 0; i < x.length; i++) {
      fn(x[i])
    }
  } else {
    return fn(x)
  }
}

/**
 * A factory function using partial currying to create an event listener util
 *
 * @param  {string}     action 'add' or 'remove' + 'EventListener'
 * @return {function}
 */
const events = (action) => (item, e, fn) =>
  apply(item, (item) => item[`${action}EventListener`](e, fn))

/**
 * A factory function using partial currying to create a classList util
 *
 * @param  {string}    action 'classList.' + 'add', 'remove', 'toggle', or 'contains'
 * @return {function}
 */
const classes = (action) => (item, cn) =>
  apply(item, (item) => item.classList[action](cn))

export const on = (node, ev, cb) => {
  events('add')(node, ev, cb)
  return () => events('remove')(node, ev, cb)
}

export const once = (item, e, fn) =>
  events('add')(item, e, function handler(ev) {
    events('remove')(item, e, handler)
    fn(ev)
  })

export const ready = (fn) => once(document, 'DOMContentLoaded', fn)

export const add = classes('add')
export const remove = classes('remove')
export const toggle = classes('toggle')
export const has = classes('contains')

export const html = document.documentElement
export const body = document.body

export function size() {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const isLandscape = windowWidth > windowHeight
  return {
    windowWidth,
    windowHeight,
    isLandscape,
    dpr: window.devicePixelRatio,
  }
}

export const index = (el) => Array.from(el.parentNode.children).indexOf(el)
