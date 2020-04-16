import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    minHeight: "100vh",
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
    height: "80vh",
    fontSize: 14,
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      background: "#509bf3",
    },
    "& .react-syntax-highlighter-line-number": {
      color: "#777",
      userSelect: "none",
    },
  },
});
