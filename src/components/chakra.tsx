import {
  ChakraProvider,
  localStorageManager
} from '@chakra-ui/react'
import theme from 'utils/theme'

export default function Chakra({ children }): JSX.Element {
  const colorModeManager = localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}
