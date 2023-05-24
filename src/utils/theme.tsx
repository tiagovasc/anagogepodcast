import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f3ece3', /*'#282828'*/ '#f3ece3')(props),
      fontFamily: `"Solid-Mono", sans-serif`
    },
    '@font-face': {
      fontFamily: 'Solid-Mono',
      fontWeight: 400,
      src: `url("/fonts/Solid-Mono.ttf") format('truetype')`
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles })
export default theme
