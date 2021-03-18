import { alpha } from '@theme-ui/color';

const theme = {
  breakpoints: ['1024px'],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 128, 256, 512],
  fonts: {
    body: '"微軟正黑體", "Microsoft JhengHei", sans-serif !important',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 96],
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  sizes: {
    maxWidth: 1120,
    slideHeight: 400,
    headerHeight: 76,
    icons: {
      small: 32,
      normal: 64,
    },
  },
  lineHeights: [1.2, 1.4, 1.8, 2],
  colors: {
    white: '#fff',
    blue: {
      primary: '#143b6d',
      secondary: '#055ba7',
      muted1: '#4484b6',
      muted2: '#92b7ca',
      primaryText: '#262262',
      secondaryText: '#143B6D',
      gradient1: 'radial-gradient(circle at left center, #92b7ca 0%, #055ba7 100%)',
      gradient2: 'radial-gradient(circle at left bottom, rgba(146, 183, 202, 0.75) 0%, rgba(5, 91, 167, 0.75) 100%)',
    },
    orange: {
      primary: '#ea5b29',
      secondary: '#f38e22',
      muted: '#f8ac17',
    },
    gray: {
      primary: '#444444',
      secondary: '#222222',
    },
  },
  gradients: {
    blue1: {
      backgroundImage: (t) =>
        `radial-gradient(circle at left bottom,${alpha('blue.muted2', 0.75)(t)} 0% ,${alpha(
          'blue.secondary',
          0.75,
        )(t)} 100%)`,
      backgroundPosition: 'left top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    blue2: {
      backgroundImage: (t) =>
        `radial-gradient(circle at left center,${alpha('blue.muted2', 1)(t)} 0% ,${alpha(
          'blue.secondary',
          1,
        )(t)} 100%)`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    },
    orange1: {
      bg: 'white',
      backgroundImage: (t) =>
        `linear-gradient(to right,${alpha('orange.secondary', 1)(t)},${alpha(
          'orange.primary',
          1,
        )(t)} 50%,transparent 50%)`,
      backgroundSize: '200% 100%',
      backgroundPosition: '100%',
      transition: 'background-position 275ms ease',
      cursor: 'pointer',
      color: 'blue.primaryText',
      p: 3,
      ':hover': {
        backgroundPosition: '0%',
        color: 'white',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'body',
      lineHeight: 1,
      fontWeight: 'normal',
    },
    body: {
      fontFamily: 'body',
      lineHeight: 2,
      fontWeight: 'normal',
    },
    link: {
      fontFamily: 'body',
      lineHeight: 3,
      fontWeight: 'light',
      textDecoration: 'none',
    },
  },
  texts: {
    h1: {
      variant: 'text.heading',
      fontSize: 10,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 9,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 8,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    subtitle: {
      variant: 'text.heading',
      fontSize: 5,
    },
    body1: {
      variant: 'text.body',
      fontSize: 6,
    },
    body2: {
      variant: 'text.body',
      fontSize: 4,
    },
    button: {
      variant: 'text.body',
      fontSize: 2,
    },
    caption: {
      variant: 'text.body',
      fontSize: 2,
    },
    overline: {
      variant: 'text.body',
      fontSize: 1,
    },
  },
  mdxText: {
    heading: {
      variant: 'text.heading',
      color: 'blue.primary',
    },
    link: {
      variant: 'text.link',
      color: 'blue.primary',
    },
  },
  buttons: {},
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 2,
      fontWeight: 1,
    },
    h1: {
      variant: 'mdxText.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      variant: 'mdxText.heading',
      lightHeight: 28,
    },
    a: {
      variant: 'mdxText.link',
      fontSize: 3,
    },
    img: {
      display: 'block',
      mx: 'auto',
      textAlign: 'center',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};

export default theme;
