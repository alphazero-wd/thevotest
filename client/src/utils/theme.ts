// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: '#da251d',
  darkRed: '#ac2f30',
  lightRed: 'b44c4c',
  secondary: '#3399fe',
  darkBlue: '#4e84d6',
  icon: '#999'
}


const theme = extendTheme({
  colors,
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif"
  }
})
export default theme;