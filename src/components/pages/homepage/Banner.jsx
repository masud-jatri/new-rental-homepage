import { Box, Grid, Typography, Button, Paper } from "@material-ui/core";
import React from "react";
import banner from "../../../asset/image/banner.png";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SelectCar from "./SelectCar";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/styles";

const Banner = () => {
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up('xs'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  // down
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid
      container
      style={{
        width: "100%",
        height: "488px",
        backgroundColor: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0,0.0) )',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundImage: mdUp ? ` url(${banner})` : "",
        
      }}
    >
      <Box
        component={Grid}
        width={{ xs: "100%", md: "52.3%" }}
        item
        style={{
          backgroundColor: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0,0.0) )',
          backgroundImage: smDown ? ` url(${banner}) ` : "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Box
          component={"p"}
          // width={{xs: '265px', sm: '100%'}}
          color={"white"}
          margin={{
            xs: "30px 0 0px 18px",
            sm: "64px 0 0px 100px",
            md: "132px 41px 0px 50px",
            lg: "132px 83.5px 0px 100px",
          }}
          fontWeight={{ xs: 400, sm: "500 !important", md: "700 !important" }}
          lineHeight={{ xs: "52px", sm: "74px", lg: "74px" }}
          fontSize={{ xs: "45px", lg: "57px" }}
        >
          On-demand <br /> car rental service
        </Box>
        <Box
          margin={{
            xs: "20px 0 45px 18px",
            sm: "20px 0 45px 100px",
            md: "20px 0 45px 132px ",
            lg: "43px 0px 45px 124px",
          }}
        >
          <Button
            style={{
              color: "white",
              padding: "13px 24px",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
              backgroundColor: "#F04935",
              borderRadius: "1000px",

              textTransform: "none",
            }}
          >
            Load more
            <ArrowDownwardIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
      <Box
        component={Grid}
        item
        width={{ xs: "100%", md: "47.7%" }}
        position={"relative"}
        // bgcolor="green"
      >
        <SelectCar />
      </Box>
    </Grid>
  );
};

export default Banner;
