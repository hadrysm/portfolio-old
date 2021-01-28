import { darken } from 'polished';
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
  line-height: 1.5;
}

body {
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.primary};
  background-color: ${({ theme }) => theme.background};
  text-rendering: optimizeLegibility;
  visibility: ${({ isVisibility }) => (isVisibility ? 'visible' : 'hidden')};

  &.no-scroll{
    overflow: hidden;
  }
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

/* .no-scroll {
  overflow: hidden;
} */


::-webkit-scrollbar {
     width: 1rem;
 }

 ::-webkit-scrollbar-track {
     box-shadow: inset 0 0 2px ${({ theme }) => theme.grey200}; 
     border-radius: 0px;
 }

 ::-webkit-scrollbar-thumb {
  background-image: linear-gradient(
      40deg,
      ${({ theme }) => theme.primary} 20%,
      ${({ theme }) => darken(0.1, theme.primary)} 70%
    );
 }
 
 ::-webkit-scrollbar-thumb:hover {
     background: ${({ theme }) => theme.primary}; 
 }
`;

export { GlobalStyled };
