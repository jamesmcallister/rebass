import * as React from 'react'
import Heading from './Heading'

interface AtomTypes {
  displayName: string | 'Subhead'
}

export const Subhead: React.SFC<AtomTypes> = props => (
  <Heading is="h3" fontSize={4} {...props} />
)

export default Subhead
