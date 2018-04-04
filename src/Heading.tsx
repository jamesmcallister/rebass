import * as React from 'react'
import sys from 'system-components'

interface AtomTypes {
  displayName?: string | 'Heading'
  is?: string | 'h2'
  fontSize?: number | 5
  fontWeight?: string | 'bold'
  lineHeight?: number | 1.25
  m?: number | 0
}

export const Heading: React.SFC<AtomTypes> = sys(
  {
    is: 'h2',
    fontSize: 5,
    fontWeight: 'bold',
    lineHeight: 1.25,
    m: 0
  },
  'color',
  'textAlign'
)

export const h1 = props => <Heading {...props} is="h1" />
export const h2 = props => <Heading {...props} is="h2" />
export const h3 = props => <Heading {...props} is="h3" />
export const h4 = props => <Heading {...props} is="h4" />
export const h5 = props => <Heading {...props} is="h5" />
export const h6 = props => <Heading {...props} is="h6" />

export default Heading
