import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyled = createGlobalStyle`
  ${normalize}
  
 *, *::after, *::before {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.primary};
  background-color: ${({ theme }) => theme.background};
  text-rendering: optimizeLegibility;
  visibility: ${({ isVisibility }) => (isVisibility ? 'visible' : 'hidden')};
}

ul {
    list-style: none;
}  

img {
  display: block;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.no-scroll {
  overflow: hidden;
}
`;

export { GlobalStyled };
