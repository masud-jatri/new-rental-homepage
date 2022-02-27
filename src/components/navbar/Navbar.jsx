import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Grid, Hidden, ImageList } from "@material-ui/core";
import { Container } from "@material-ui/core";
import brandLogo from "../../asset/image/brand-logo.svg";
import loginLogo from '../../asset/image/login-logo.svg';
import burger from '../../asset/image/burger.svg'
import {Link} from 'react-router-dom'

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
 
 
  
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static" color="transparent" style={{boxShadow:'none' }}>
        <Box padding={{
          xs: '0 18px',
          sm: '0 36px',
          lg: '0 100px'
        }}>
          <Grid container justifyContent="space-between" alignItems="center" >
            <Grid item>
              <Link to='#'>
                <img src={brandLogo} alt="logo of jatri" style={{width: '146px', height: '44px', marginTop: '31px', marginBottom: '31px'}} />
              </Link>            
            </Grid>
            <Hidden smDown>
              <Grid item>
                
                <Link to='#' style={{ marginRight: '27px', textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '500'}} >
                  Favourite routes
                </Link>
                          
                <Link to='#' style={{marginLeft: '27px', marginRight: '27px', textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '500'}} >
                  Book for events
                </Link>
                        
                <Link to='#' style={{marginLeft: '27px', marginRight: '27px', textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '500'}} >
                  Business
                </Link>
                    
                <Link to='#' style={{marginLeft: '27px', marginRight: '27px', textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '500'}} >
                  Drive with jatri
                </Link>
                  
                <Link to='#' style={{marginLeft: '27px', textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '500'}} >
                  <img src={loginLogo} alt="" style={{width: '11px', height: '14px'}} /> Log in
                </Link>
              
              </Grid>
            </Hidden>

            <Hidden mdUp>
              <Grid item  >
              <Link to='#' style={{marginLeft: '27px', marginRight: '27px',  textDecoration:  'none' , color: 'black', fontSize: '14px', fontWeight: '500'}} >
                  <img src={loginLogo} alt="" style={{width: '11px', height: '14px'}} /> Log in
                </Link>
                <img src={burger} alt="" />
              </Grid>
            </Hidden>
            
          </Grid>
        </Box>
        
      </AppBar>
    </Box>
  );
};

export default Navbar;
