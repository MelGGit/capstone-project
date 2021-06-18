import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
    --light-blue: #86B3D1;
    --light-black: #41474a;
    --dark-blue: #4D6D9A;
    --mint: #99CED3;
    --black-accent: #212121;
    --darker-grey: #bbb6b6;
    --darkest-grey: #424246;
    --light-grey: #d4d99d;
    --akzent-pink: #EDB5BF;
    --white-pastel: #F0EBF4;
    --white: #f1f1f1;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: sans-serif;
  background: black;
  color: var(--white);
}

input,
button,
textarea {
  font-size: inherit;
}
`

export default GlobalStyles
