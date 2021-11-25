function pxToRem(value) {
  return `${value / 16}rem`;
}

const FONT_PRIMARY = `'Roboto Slab', serif`; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightBold: 900,
  h1: {
    fontWeight: 900,
    lineHeight: "63.3px",  // 80 / 64,
    fontSize: pxToRem(48),

  },
  h2: {
    fontWeight: 900,
    lineHeight: 1, // 64 / 48,
    fontSize: pxToRem(36),
  },
  h3: {
    fontWeight: 900,
    fontSize: pxToRem(24),
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(20),
  },
  h5: {
    fontWeight: 500,
    fontSize: pxToRem(18),
  },
  h6: {
    fontWeight: 500,
    fontSize: pxToRem(17),
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: pxToRem(16)
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: pxToRem(14)
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(14)
  },
  caption: {
    fontSize: pxToRem(12)
  },
  overline: {
    fontWeight: 500,
    fontSize: pxToRem(12),
    letterSpacing: 1.2,
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: "normal",
    lineHeight: 24 / 14,
    textTransform: 'capitalize'
  }
};

export default typography;
