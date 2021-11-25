import palette from '../palette';

export default function FormControlLabel() {
  return {
    MuiFormLabel: {
      root: {
        color: palette.text.secondary,
        fontWeight: 400,
        fontSize: 14,
        '&$focused': {
          color: palette.text.secondary
        }
      },

      filled: {
        '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
          transform: 'translate(12px, 10px) scale(0.85)'
        }
      }
    }
  };
}
