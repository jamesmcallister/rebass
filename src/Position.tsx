import sys from 'system-components'
import * as React from 'react'

interface Position {
  displayName?: string | 'Position'
  space?: boolean | null
  color?: boolean | null
  zIndex?: boolean | null
  top?: boolean | null
  right?: boolean | null
  bottom?: boolean | null
  left?: boolean | null
}
export const Position: Position = sys(
  'space',
  'color',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left'
)
interface RelativeTypes {
  displayName?: string | 'relative'
}
export const Relative: React.SFC<RelativeTypes> = sys(
  {
    is: Position
  },
  {
    position: 'relative'
  }
)

interface AbsoluteTypes {
  displayName?: string | 'absolute'
  top?: number | null
  right?: number | null
  bottom?: number | null
  left?: number | null
}

export const Absolute: React.SFC<AbsoluteTypes> = sys(
  {
    is: Position
  },
  {
    position: 'absolute'
  }
)

interface FixedTypes {
  displayName?: string | 'fixed'
  top?: boolean | null
  right?: boolean | null
  bottom?: boolean | null
  left?: boolean | null
}

export const Fixed: React.SFC<FixedTypes> = sys(
  {
    is: Position
  },
  {
    position: 'fixed'
  }
)

interface StickyTypes {
  displayName?: string | 'sticky'
  top?: boolean | null
  right?: boolean | null
  bottom?: boolean | null
  left?: boolean | null
}

export const Sticky: React.SFC<StickyTypes> = sys(
  {
    is: Position
  },
  {
    position: 'sticky'
  }
)
