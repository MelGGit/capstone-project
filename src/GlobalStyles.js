import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
    --light-blue: #86B3D1;
    --dark-blue: #4D6D9A;
    --mint: #99CED3;
    --black: #5F6366;
    --akzent-pink: #EDB5BF;
    --white: #F0EBF4;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: sans-serif;
  font-size: 112.5%;
  background: var(--white);
  color: var(--black);
}

input,
button,
textarea {
  font-size: inherit;
}
`

export default GlobalStyles
