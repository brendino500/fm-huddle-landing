import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Button } from "@material-ui/core";

import { ReactComponent as MockupIllustration } from "../images/illustration-mockups.svg";

const useStyles = makeStyles({
  root: {
    margin: 15,
  },
  textContainer: {
    maxWidth: 450,
  },
  title: {
    fontFamily: "Poppins",
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "strong",
    letterSpacing: 1,
  },
  text: {
    fontFamily: "Poppins",
    color: "#ffffff",
    fontSize: 15,
  },
  image: {
    maxWidth: 450,
  },
  button: {
    color: "#9952FF",
    borderRadius: 45,
    margin: 10,
    width: 200,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    textTransform: "none",
    margin: 5,
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <MockupIllustration className={classes.image} />
        <div className={classes.textContainer}>
          <Typography className={classes.title}>
            <b>Build The Community Your Fans Will Love</b>
            <Typography className={classes.text}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </Typography>
            <Button className={classes.button} variant="contained">
              <Typography className={classes.buttonText}>Register</Typography>
            </Button>
          </Typography>
        </div>
      </Grid>
    </Container>
  );
}
