import { createTheme } from '@material-ui/core/styles';
import Card from './overrides/Card';
import Button from './overrides/Button';
import Input from './overrides/Input';
import palette from './palette';
import typography from './typography';
import FormControlLabel from './overrides/Label';
import FormHelperText from './overrides/FormHelperText';
import Dialog from './overrides/Dialog';
import Timeline from './overrides/Timeline';

// NB: This is only extending/customizing the material ui theme
// refer to https://material-ui.com/customization/default-theme/ to see the default theme/props

const defaultTheme = createTheme();

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1140,
      _lg: 1440,
      xl: 1920
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      size: 'small'
    },
    MuiButton: {
      color: 'primary',
      variant: 'contained'
    },
    MuiDatePicker: {
      variant: 'inline',
      inputVariant: 'outlined',
      autoOk: true,
      emptyLabel: 'Date'
    },
    MuiTimePicker: {
      variant: 'inline',
      inputVariant: 'filled',
      autoOk: true,
      emptyLabel: 'Time',
      InputProps: {
        disableUnderline: true
      }
    },
    MuiDateTimePicker: {
      variant: 'inline',
      inputVariant: 'filled',
      autoOk: true,
      emptyLabel: 'Date & Time',
      InputProps: {
        disableUnderline: true
      }
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: '#FFFFFF'
        }
      },
    },
    ...Card(defaultTheme),
    ...Input(defaultTheme),
    ...Button(defaultTheme),
    ...FormControlLabel(defaultTheme),
    ...FormHelperText(defaultTheme),
    ...Dialog(defaultTheme),
    ...Timeline(defaultTheme)
  },
  palette,
  typography
});

export default theme;
