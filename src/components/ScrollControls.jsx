import { useState, useEffect, useCallback } from 'react'

/** Pixels scrolled before the control fades in. */
const SHOW_AFTER = 400
/** How close to the bottom counts as "already there" (px). */
const BOTTOM_EPSILON = 2

/**
 * Floating up/down scroll control.
 * One pill with two arrows: jump to the top of the long page, or jump to the
 * bottom (contact + footer). Appears once the visitor has scrolled into the
 * page, and disables the down arrow when there is nothing left below.
 */
function ScrollControls() {
  const [visible, setVisible] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const pageHeight = document.documentElement.scrollHeight

      setVisible(scrollY > SHOW_AFTER)
      setAtBottom(scrollY + viewportHeight >= pageHeight - BOTTOM_EPSILON)
      ticking = false
    }

    // rAF-throttled so scrolling stays smooth on low-end phones
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollTo = useCallback((top) => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }, [])

  const scrollTop = useCallback(() => scrollTo(0), [scrollTo])

  const scrollBottom = useCallback(
    () => scrollTo(document.documentElement.scrollHeight),
    [scrollTo]
  )

  return (
    <div className={`scroll-controls${visible ? ' scroll-controls--visible' : ''}`}>
      <button
        type="button"
        className="scroll-controls__btn"
        onClick={scrollTop}
        aria-label="Scroll to top of page"
        title="Back to top"
        tabIndex={visible ? 0 : -1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <span className="scroll-controls__divider" aria-hidden="true"></span>

      <button
        type="button"
        className="scroll-controls__btn"
        onClick={scrollBottom}
        disabled={atBottom}
        aria-label="Scroll to bottom of page"
        title="Go to bottom"
        tabIndex={visible && !atBottom ? 0 : -1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  )
}

export default ScrollControls
