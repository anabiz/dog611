import palette from '../palette';

export default function Input() {
  return {
    MuiInputBase: {
      input: {
        color: palette.text.main,
        fontSize: 14,
        fontWeight: 400,
      },

      root: {
        '&.Mui-error, &$focused': {
          borderColor: '#F48989'
        },

        '&.MuiFilledInput-underline:before, &.MuiFilledInput-underline:after': {
          display: 'none'
        }
      }
    },

    MuiOutlinedInput: {
      root: {
        border: '0.5px solid #CDCED9',
        borderRadius: '4px',
        // backgroundColor: '#A4DEF9',

        '&:hover': {
          backgroundColor: '#A4DEF9'
        },
        '&$hover': {
          backgroundColor: '#fff',
          boxShadow: `none`,
          borderColor: '#083A55'
        },
        '&$focused': {
          backgroundColor: '#A4DEF9',
          boxShadow: `none`,
          borderColor: '#083A55'
        },
        '&.Mui-disabled': {
          // backgroundColor: theme.palette.action.disabledBackground
        },

        '&.Mui-error, &.Mui-error$focused': {
          // borderColor: '#F48989'
        },

        '& .MuiOutlinedInput-notchedOutline': {
          // border: 0
        }
      },



      input: {
        paddingLeft: 12,
        paddingRight: 12
      },
    },

    MuiFilledInput: {
      root: {
        backgroundColor: '#F5F7FA',
padding: 0,
      },
      inputMarginDense: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24
      }
    },

    MuiAutocomplete: {
      root: {
        '& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after':
        {
          display: 'none'
        }
      }
    },

    MuiSelect: {
      root: {
        '&.MuiSelect-filled.MuiSelect-filled': {
          paddingTop: 24,
          paddingBottom: 5
        }
      }
    }
  };
}
