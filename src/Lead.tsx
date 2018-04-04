import * as React from 'react'
import Text from './Text'

interface AtomTypes {
  displayName?: string | 'Lead'
}

export const Lead: React.SFC<AtomTypes> = props => (
  <Text is="p" fontSize={3} lineHeight={1.25} {...props} />
)

export default Lead
