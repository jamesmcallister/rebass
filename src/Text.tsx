import sys from 'system-components'

interface AtomTypes {
  displayName?: string | 'Text'
  m?: number | 0
}

export const Text = sys(
  {
    m: 0
  },
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight'
)

export default Text
