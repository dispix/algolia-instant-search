import * as React from "react"
// include polyfil for non-supported browsers
require("intersection-observer")

function useIntersection(
  target: HTMLElement | null,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
): IntersectionObserver | undefined {
  const intersectionObserver = React.useRef<IntersectionObserver>()

  React.useEffect(() => {
    if (target) {
      intersectionObserver.current = new IntersectionObserver(callback, options)
      intersectionObserver.current.observe(target)
      return () =>
        intersectionObserver.current &&
        intersectionObserver.current.unobserve(target)
    }
  }, [target, callback, options])

  return intersectionObserver.current
}

export default useIntersection
