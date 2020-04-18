import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    minHeight: "100vh",
    position: "relative",
  },
  background: {
    position: "absolute",
    zIndex: -999,
    width: "110vw",
    maxWidth: "100%",
    height: "100%",
    userSelect: "none",
  },
  containerGrid: {
    minHeight: "110vh",
  },
  containerItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontWeight: 300,
  },
  hidden: {
    visibility: "hidden",
  },
  project: {
    "& > div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  youtube: {
    "& > div > div": {
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      overflow: "hidden",
      maxWidth: "100%",
      "& > iframe": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      },
    },
  },
});
