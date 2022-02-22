import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Grid, ImageList } from "@material-ui/core";
import { Container } from "@material-ui/core";
import logo from "../../asset/image/jatri-logo.png";

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
  container: {
    paddingLeft: 100,
    paddingRight: 100,
  },
  logo: {
    width: 146,
    height: 44,
    marginTop: 31,
    marginBottom: 31,
  },
  button: {
    marginLeft: 27,
    marginright: 27,
  },
  loginButton: {
    backgroundColor: "#F04935",
    borderRadius: "1000px",
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="transparent" style={{boxShadow:'none'}}>
        <Grid container justifyContent="space-between" alignItems="center" style={{paddingLeft: "100px", paddingRight: "100px"}}>
    <Grid item>
            <img src={logo} alt="logo of jatri" className={classes.logo} />
          </Grid>
          <Grid item>
            <Button color="inherit" className={classes.button}>
              Favourite routes
            </Button>
            <Button color="inherit" className={classes.button}>
              Book for events
            </Button>
            <Button color="inherit" className={classes.button}>
              Business
            </Button>
            <Button color="inherit" className={classes.button}>
              Drive with jatri
            </Button>
            <Button style={{backgroundColor:'#F04935', borderRadius: '1000px', color: 'white', padding: '13px 24px', marginLeft: '60px'}}>
              Log in
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
