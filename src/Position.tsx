import sys from 'system-components'
import * as React from 'react'

interface IPosition {
  space?: boolean
  color?: boolean
  zIndex?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

export const Position = sys(
  'space',
  'color',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left'
)

Position.displayName = 'Position'

export const Relative = sys(
  {
    is: Position
  },
  {
    position: 'relative'
  }
)
Relative.displayName = 'Relative'

export const Absolute = sys(
  {
    is: Position
  },
  {
    position: 'absolute'
  }
)
Absolute.displayName = 'Absolute'

// interface FixedTypes extends IPosition {
//   position?: string | 'fixed'
// }

interface FixedTypes {
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
  displayName: 'Sticky'
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

export const Sticky: React.SFC<StickyTypes> = sys(
  {
    is: Position
  },
  {
    position: 'sticky'
  }
)
