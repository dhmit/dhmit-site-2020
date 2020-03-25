import { clamp } from '@/util/math'

/**
 * A helper function that passes the provided value to the provided function.
 * If an array is provided, the function will be fired for each item in the
 * array.
 *
 * @param  {*}          x a value or array of values
 * @param  {function}   fn the function to call
 * @return {null}
 */
export function call(x, fn) {
  if (Array.isArray(x)) {
    for (let i = 0; i < x.length; i++) fn(x[i])
  } else {
    return fn(x)
  }
}

/**
 * A factory function that creates an event listener util
 *
 * @param  {string}     action 'add' or 'remove'
 * @return {function}
 */
function events(action) {
  return (x, e, fn) => call(x, (x) => x[`${action}EventListener`](e, fn))
}

/**
 * A factory function that creates a classList util
 *
 * @param  {string}    action 'add', 'remove', 'toggle', or 'contains'
 * @return {function}
 */
function classes(action) {
  return (x, ...cn) => call(x, (x) => x.classList[action](...cn))
}

/**
 * Add an event listener to one elements or an array of elements.
 * Conveniently returns unsubscribe function.
 *
 * @param  {*}           x an element or an array of elements
 * @param  {string}      ev event type
 * @param  {function}    cb callback function
 * @return {function}
 */
export function on(x, ev, cb) {
  events('add')(x, ev, cb)
  return () => events('remove')(x, ev, cb)
}

/**
 * classList shorthand for adding classes to elements
 *
 * @param  {string}     x an element or an array of elements
 * @param  {string}     cn classname
 * @return {void}
 */
export function add(x, cn) {
  classes('add')(x, cn)
}

/**
 * classList shorthand for removing classes to elements
 *
 * @param  {string}     x an element or an array of elements
 * @param  {string}     cn classname
 * @return {void}
 */
export function remove(x, cn) {
  classes('remove')(x, cn)
}

/**
 * classList shorthand for adding classes to elements
 *
 * @param  {string}     x an element or an array of elements
 * @param  {string}     cn classname
 * @return {void}
 */
export function toggle(x, cn) {
  classes('toggle')(x, cn)
}

/**
 * classList shorthand for checking if an element contains a classname
 *
 * @param  {string}     x element
 * @param  {string}     cn classname
 * @return {boolean}
 */
export function has(x, cn) {
  return x.classList.contains(cn)
}

/**
 * Get dimensions of viewport
 *
 * @return {object}
 */
export function size() {
  return {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  }
}

/**
 * Get the index of the provided element amongst it's siblings
 *
 * @param {HTMLElement}
 * @return {number}
 */
export function index(el) {
  return Array.from(el.parentNode.children).indexOf(el)
}

/**
 * Reports the current scroll percentage of an element within the viewport
 *
 * @param  {HTMLElement} el   Element to track
 * @param  {number}      vh   Current viewport height
 * @return {number}
 */
export function scrollPercentage(el, vh) {
  const bounds = el.getBoundingClientRect()
  const threshold = 0
  const offsetTop = threshold * vh * 0.25
  const offsetBottom = threshold * vh * 0.25

  return (
    1 -
    clamp(
      (bounds.bottom - offsetTop) /
        (vh + bounds.height - offsetBottom - offsetTop),
      0,
      1,
    )
  )
}

/**
 * Returns true if the provided element is currently within the viewport
 *
 * @param  {HTMLElement} el   Element to track
 * @param  {number}      vh   Current viewport height
 * @return {boolean}
 */
export function inview(el, vh) {
  const percent = scrollPercentage(el, vh)
  return percent > 0 && percent < 1
}
