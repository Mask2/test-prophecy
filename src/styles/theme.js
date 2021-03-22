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
  lineHeights: {
    heading1: 1,
    heading2: 1.2,
    body1: 1.4,
    body2: 1.8,
  },
  sizes: {
    maxWidth: 1120,
    slideHeight: 400,
    slideMobileHeight: 200,
    headerHeight: 76,
    trHeight: 64,
    icons: {
      small: 32,
      normal: 64,
      larger: 130,
    },
  },
  zIndices: {
    base: 10,
    cover: 100,
    overCover: 1000,
  },
  colors: {
    white: '#fff',
    blue: {
      primary: '#143b6d',
      secondary: '#055ba7',
      muted1: '#4484b6',
      muted2: '#92b7ca',
      primaryText: '#262262',
      secondaryText: '#143B6D',
    },
    orange: {
      primary: '#ea5b29',
      secondary: '#f38e22',
      muted: '#f8ac17',
    },
    gray: {
      primary: '#222222',
      secondary: '#444444',
      muted1: '#d2d2d2',
      muted2: '#777777',
    },
  },
  // ------ base styles and variant styles ------
  text: {
    heading: {
      fontFamily: 'body',
      lineHeight: 'heading2',
      fontWeight: 'normal',
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'body1',
      fontWeight: 'normal',
    },
    link1: {
      fontFamily: 'body',
      lineHeight: 'body1',
      fontWeight: 'light',
      textDecoration: 'none',
    },
    link2: {
      variant: 'texts.caption',
      textDecoration: 'underLine',
      cursor: 'pointer',
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
      fontSize: 7,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    subtitle1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    subtitle2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    body1: {
      variant: 'text.body',
      fontSize: 4,
    },
    body2: {
      variant: 'text.body',
      fontSize: 2,
    },
    button: {
      variant: 'text.body',
      fontSize: 3,
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
      color: 'gray.primary',
    },
    link: {
      variant: 'text.link1',
      color: 'gray.primary',
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
      backgroundPosition: '0%',
    },
  },
  hovers: {
    orange1: {
      variant: 'gradients.orange1',
      color: 'blue.primaryText',
      backgroundPosition: '100%',
      transition: 'background-position 275ms ease',
      cursor: 'pointer',
      p: 3,
      ':hover': {
        backgroundPosition: '0%',
        color: 'white',
      },
    },
    orange2: {
      backgroundImage: 'none',
      cursor: 'pointer',
      p: 3,
      transition: 'background-image 275ms ease',
      ':hover': {
        color: 'white',
        variant: 'gradients.orange1',
      },
    },
    orange3: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s ease-in-out',
      cursor: 'pointer',
      ':hover': {
        color: 'orange.primary',
        position: 'relative',
      },
    },
    orange4: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s ease-in-out',
      cursor: 'pointer',
      ':hover': {
        color: 'orange.muted',
        position: 'relative',
      },
    },
  },
  form: {
    input: {
      variant: 'texts.body1',
      fontWeight: 'bold',
      borderRadius: 0,
      ':focus': {
        outline: 'none',
        borderColor: 'gray.primary',
      },
      '::placeholder': {
        opacity: 1,
      },
    },
  },
  buttons: {
    orange1: {
      bg: 'orange.primary',
      color: 'white',
      fontSize: 1,
      py: 3,
      px: 10,
    },
    orange2: {
      bg: 'orange.primary',
      color: 'white',
      fontSize: 1,
      py: 3,
      px: 10,
    },
    iconSmall: {
      width: 'icons.small',
      height: 'icons.small',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 3,
    },
    iconNormal: {
      width: 'icons.normal',
      height: 'icons.normal',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 4,
    },
    normal: {
      px: 8,
      py: 2,
      fontSize: 2,
      fontWeight: 'bold',
      lineHeight: 'heading1',
      border: 'white',
      display: 'inline-block',
    },
  },
  borders: {
    white: ' 1px solid white',
  },
  shadows: {
    header: '0 12px 14px 0 rgb(0 0 0 / 10%)',
    button: '0 25px 25px 0 rgb(0 0 0 / 10%)',
  },
  styles: {
    root: {},
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
      lineHeight: 2,
    },
    a: {
      variant: 'mdxText.link',
      fontSize: 3,
    },
    strong: {
      variant: 'mdxText.heading',
      fontWeight: 'bold',
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
