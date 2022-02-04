import { Paper } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: "2em",
  },
}));

const ContentWrapper = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      {props.children}
    </Paper>
  );
};

export default ContentWrapper;
