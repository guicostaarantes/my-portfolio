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
  container: {
    minHeight: "88vh",
  },
  containerItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "88vh",
  },
  text: {
    color: "#ffffff",
    fontWeight: 300,
  },
  button: {
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
    "& label.Mui-focused": {
      // label when something is written
      color: "#539bf2",
    },
    "& > div": {
      // text
      color: "white",
    },
    "& > label": {
      // label when nothing is written
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      // border normal
      "& fieldset": {
        borderColor: "#bbb",
      },
      "&:hover fieldset": {
        // border when hovered
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        // border selected
        borderColor: "#539bf2",
      },
    },
  },
  end: {
    display: "flex",
    justifyContent: "center",
  },
});
