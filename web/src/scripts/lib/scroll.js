import { rect, clamp } from 'martha'

/**
 * Reports the current scroll percentage of an element within the viewport
 *
 * @param  {HTMLElement} el   Element to track
 * @param  {number}      vh   Current viewport height
 * @return {number}
 */
export function scrollPercentage(el, vh) {
  const bounds = rect(el)
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
