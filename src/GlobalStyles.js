import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
}
input,
button,
textarea {
  font-size: inherit;
}
`

export default GlobalStyles
