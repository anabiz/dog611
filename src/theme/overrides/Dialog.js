export default function Dialog(theme) {
  return {
    MuiDialog: {
      paperFullWidth: {
        [theme.breakpoints.down("xs")]: {
          width: "100%",
        }
      },
      paper: {
        [theme.breakpoints.down("xs")]: {
          margin: 0,
        }
      },
      paperScrollPaper: {
        [theme.breakpoints.down("xs")]: {
          maxHeight: "100%",
        }
      },
    },
  };
}
