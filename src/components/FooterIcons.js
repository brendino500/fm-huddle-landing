import React from "react";
import {
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialInstagram,
} from "react-icons/ti";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    margin: 20,
  },
  icon: {
    color: "#ffffff",
    fontSize: 45,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        icon={<TiSocialFacebookCircular />}
        className={classes.icon}
      />
      <BottomNavigationAction
        icon={<TiSocialTwitterCircular />}
        className={classes.icon}
      />
      <BottomNavigationAction
        icon={<TiSocialInstagram />}
        className={classes.icon}
      />
    </BottomNavigation>
  );
}
