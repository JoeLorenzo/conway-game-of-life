import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    ".main-container": {
      width: "100%",
      padding: "20px 15% 7.5% 15%",
      [theme.breakpoints.down("lg")]: {
        padding: "7.5% 10% 7.5% 10%",
      },
      [theme.breakpoints.down("md")]: {
        padding: "5% 5% 5% 5%",
      },
    },
    ".item-container": {
      width: "100%",
      padding: "0 0 125px 0",
      [theme.breakpoints.down("lg")]: {
        padding: "0 0 100px 0",
      },
      [theme.breakpoints.down("md")]: {
        padding: "0 0 75px 0",
      },
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
