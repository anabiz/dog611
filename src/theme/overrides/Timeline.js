export default function Timeline(theme) {
  return {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
          padding: 0
        }
      },
    },
  };
}
