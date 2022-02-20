import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Grid, ImageList } from "@material-ui/core";
import logo from "../../asset/jatri-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 146,
    height: 44,
  },

}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent' >
        <Grid container justifyContent="space-between" alignItems="center" style={{padding: "31px 100px"}}>
          <Grid item>
            <img src={logo} alt="logo of jatri" className={classes.logo} />
          </Grid>
          <Grid item>
            {/* <Toolbar> */}
              <Button color="inherit">Favourite routes</Button>
              <Button color="inherit">Book for events</Button>
              <Button color="inherit">Business</Button>
              <Button color="inherit">Drive with jatri</Button>
              <Button color="inherit">Log in</Button>
              
            {/* </Toolbar> */}
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
