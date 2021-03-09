const theme = {
  breakpoints: ['1024px'],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: {
    body: '"微軟正黑體", "Microsoft JhengHei", sans-serif !important',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    light: 300,
  },
  sizes: {
    maxWidth: 1120,
    slideHeight: 400,
    headerHeight: 76,
    icon: 32,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    link: 1.75,
    info: 2,
  },
  colors: {
    text: '#fff',
    primaryText: '#2c2364',
    normalText: '#444444',
    background: '#fff',
    primary: '#143b6d',
    secondary: '#ea5b29',
    muted: '#055BA7',
    border: '#f4f4f4',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'heading',
      color: 'primary',
    },
    link: {
      fontFamily: 'body',
      lineHeight: 'link',
      fontWeight: 'light',
      color: 'primary',
      textDecoration: 'none',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
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
      color: 'primary',
      lightHeight: 28,
    },
    a: {
      variant: 'text.link',
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
