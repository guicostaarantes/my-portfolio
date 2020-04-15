import { makeStyles } from "@material-ui/core/styles";

import wave2 from "../assets/wave2.svg";

export default makeStyles({
  root: {
    minHeight: "100vh",
    background: `bottom center url(${wave2})`,
    backgroundSize: "cover",
    padding: "1em",
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
    marginRight: 20,
  },
});
