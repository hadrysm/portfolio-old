const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1150,
  bigDesktop: 1440,
  huge: 1700,
};

export const theme = {
  colors: {
    background: '#F8F8F8',
    white: '#FFFFFF',
    black: '#000000',
    main: '#434149',
    text: '#434149',
    primary: '#FCBF49',
    secpondary: '#3C404D',
    tertiary: '#E63946',
    grey: ' #BCBCBC',
    grey100: ' #9C9C9C',
  },
  font: {
    family: {
      primary: `'Montserrat', sans-serif`,
      secondary: `'Catamaran', sans-serif`,
    },
    weight: {
      regular: 400,
      bold: 700,
    },
    size: {
      headers: {
        xs: '2rem',
        s: '2.4rem',
        m: '3.4rem',
        l: '4rem',
        xl: '5rem',
        xxl: '8.6rem',
      },
      body: {
        xs: '1.4rem',
        s: '1.6rem',
        m: '2rem',
        l: '2.2rem',
        xl: '2.4rem',
        xxl: '2.8rem',
      },
    },
  },

  layout: {
    maxContainerWidth: '140.4rem',
    // mainSpacing: '2rem',
  },

  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {}),

  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
    level11: '11000',
  },
};
