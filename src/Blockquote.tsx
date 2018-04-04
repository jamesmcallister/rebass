import * as React from 'react'
import Text from './Text'

interface AtomTypes {
  displayName?: string | 'Blockquote'
}

export const Blockquote: React.SFC<AtomTypes> = props => (
  <Text is="blockquote" fontSize={3} m={0} {...props} />
)

export default Blockquote
