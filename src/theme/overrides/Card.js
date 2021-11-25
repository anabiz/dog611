import palette from "../palette";
import typography from "../typography";


export default function Card(theme) {
  return {
    MuiCard: {
      root: {
        boxShadow: "0px 0px 1px #BBBBBB",
        borderRadius: "4px",
        position: 'relative',
      }
    },
    MuiCardHeader: {
      root: {
        padding: theme.spacing(3, 3, 0)
      },
      title: {
        fontSize: typography.fontSizeXXLarge,
        color: palette.text.title
      }
    },
    MuiCardContent: {
      root: {
        padding: theme.spacing(3)
      }
    }
  };
}
