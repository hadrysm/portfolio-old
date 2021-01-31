const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1150,
  bigDesktop: 1440,
  huge: 1700,
};

const colors = {
  background: '#F9F9F9',
  white: '#FFFFFF',
  black: '#000000',
  main: '#434149',
  text: '#323136',
  violet: '#9c41ce',
  red: '#f5423c',
  green: '#0cce6b',
  grey: '#EEEEEE',
  grey100: ' #BCBCBC',
  grey200: ' #9C9C9C',
  grey400: '#3C404D',
  secondary: '#2F3037',
};

export const pageTheme = {
  home: {
    primary: colors.violet,
  },
  projects: {
    primary: colors.red,
  },
  blog: {
    primary: colors.grey400,
  },
};

export const theme = {
  ...colors,
  ...pageTheme.home,
  font: {
    family: {
      primary: `'Poppins', sans-serif`,
      secondary: `'Raleway', sans-serif`,
    },
    weight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
    size: {
      headers: {
        xs: '2rem',
        s: '2.4rem',
        m: '3.4rem',
        l: '4rem',
        xl: '5rem',
        xxl: '7.6rem',
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
    maxContainerWidth: '160.4rem',
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
