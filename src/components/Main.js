import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 15,
  },
  title: {
    fontFamily: "Poppins",
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "strong",
  },
  text: {
    fontFamily: "Poppins",
    color: "#ffffff",
    fontSize: 15,
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title}>
        <b>Build The Community Your Fans Will Love</b>
        <Typography className={classes.text}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </Typography>
        Register
      </Typography>
    </Container>
  );
}
