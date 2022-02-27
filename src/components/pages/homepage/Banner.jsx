import { Box, Grid, Typography, Button, Paper } from "@material-ui/core";
import React from "react";
import banner from "../../../asset/image/banner.png";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CarSelect from "./CarSelect";
import { makeStyles } from "@material-ui/core/styles";

const Banner = () => {
  return (
    <Box
      style={{
        background: `url(${banner})`,
        width: "100%",
        height: "488px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid container style={{ height: "100%" }}>
        <Box
          component={Grid}
          width={{ xs: "100%" , md: "52.3%" }}
          item
        
        >
          <Box
            component={"p"}
            color={"white"}
            margin={{ sm: '30px 0 20px 18px', lg: "132px 83.5px 0px 100px" }}
            fontWeight={{ xs: "400", lg: '700' }}
            lineHeight={{ xs: "52px" , lg: '74px' }}
            fontSize={{xs: '45px', lg: "57px" }}
            
          >
            On-demand <br /> car rental service
          </Box>
          <Button
            style={{
              color: "white",
              padding: "13px 24px",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
              backgroundColor: "#F04935",
              borderRadius: "1000px",
              margin: "43px 0px 45px 124px",
              textTransform: "none",
            }}
          >
            Load more
            <ArrowDownwardIcon fontSize="small" />
          </Button>
        </Box>
        <Grid item style={{ width: "47.7%", position: "relative" }}>
          <CarSelect />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
