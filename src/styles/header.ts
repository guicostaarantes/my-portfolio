import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    minHeight: "100vh",
    position: "relative",
  },
  background: {
    position: "absolute",
    zIndex: -999,
    width: "100vw",
    maxWidth: "100%",
    height: "100%",
    userSelect: "none",
  },
  containerGrid: {
    minHeight: "88vh",
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
  button: {
    marginTop: 20,
    marginRight: 20,
  },
});
