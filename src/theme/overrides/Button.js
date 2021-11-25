import palette from '../palette';

export default function Button(theme) {
  return {
    MuiButton: {
      root: {
        boxShadow: 'none',
        borderRadius: 'none',
        color: "#fff"
      },
      outlinedPrimary: {
        background: palette.primary.light,
        border: `1px solid ${palette.primary.main}`,
        color: '#926D00'
      },
      containedPrimary: {
        color: "#fff",
        background: palette.primary.main,
        boxShadow: 'none'
      },
      textPrimary: {
        color: '#926D00',
        paddingLeft: 17,
        paddingRight: 17
      },
      colorInherit: {
        background: palette.primary.light,
        color: '#BC8D00',
        paddingLeft: 17,
        paddingRight: 17,
        boxShadow: 'none'
      }
    }
  };
}
