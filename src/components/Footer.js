import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "transparent",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 10,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Typography className={classes.text}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://brendaty.com" target="_blank" rel="noreferrer">
          Brenda Ty
        </a>
        .
      </Typography>
    </BottomNavigation>
  );
}
