import * as React from 'react'
import { Text } from './Text'

interface AtomTypes {
  displayName: string | 'Small'
}

export const Small: React.SFC<AtomTypes> = props => (
  <Text is="small" fontSize={0} {...props} />
)

export default Small
