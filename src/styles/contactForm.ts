import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  text: {
    color: "#ffffff",
    fontWeight: 300,
  },
  button: {
    marginTop: 20,
  },
  recaptcha: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
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
});
