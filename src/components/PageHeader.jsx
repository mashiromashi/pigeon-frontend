import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { colors } from "../theme/theme";

const useStyles = makeStyles(() => ({
  cardHeader: {
    backgroundColor: colors.gold,
    height: 80,
    borderRadius: 5,
    marginBottom: "1em",
  },
  container: {
    marginTop: "0.5em",
    marginLeft: "1.5em",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    color: "white",
    fontStyle: "italic",
  },
}));

const PageHeader = ({ title, content }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.cardHeader} boxShadow={3}>
      <Grid container direction="column" className={classes.container}>
        <Typography variant="subtitle1" gutterBottom className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.content}>
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
