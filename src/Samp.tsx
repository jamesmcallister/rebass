import * as React from 'react'
import Code from './Code'

interface AtomTypes {
  displayName?: string | 'Samp'
}

export const Samp: React.SFC<AtomTypes> = props => <Code is="samp" {...props} />

export default Samp
