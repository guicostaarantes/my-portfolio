import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    minHeight: "100vh",
    padding: "1em",
  },
  container: {
    minHeight: "100vh",
  },
  containerItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
  },
  text: {
    color: "#ffffff",
    fontWeight: 300,
  },
  code: {
    background: "transparent ! important",
    fontSize: 14,
    "& .react-syntax-highlighter-line-number": {
      color: "#777",
    },
  },
});
