import * as React from "react"

import maybeCall from "../../utils/maybeCall"
import useIntersection from "../../utils/useIntersection"

export interface ScrollTriggerProps {
  children: React.ReactNode
  triggerOffset?: number
  onTriggerIn?: () => void
  onTriggerOut?: () => void
}

const triggerStyle = { width: 0, height: 0, opacity: 0 }

const ScrollTrigger = ({
  children,
  onTriggerIn,
  onTriggerOut,
  triggerOffset = 0,
}: ScrollTriggerProps) => {
  const count = React.Children.count(children)
  const target = count - 1 - triggerOffset

  const div = React.useRef<HTMLDivElement>(null)
  useIntersection(div.current, entries =>
    maybeCall(entries[0].isIntersecting ? onTriggerIn : onTriggerOut)(),
  )

  return React.Children.map(children, (child, index) =>
    index === target ? (
      <React.Fragment>
        <div style={triggerStyle} ref={div} />
        {child}
      </React.Fragment>
    ) : (
      child
    ),
  )
}

export default ScrollTrigger
