import React from "react";
import { Paper, Box, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import sedanCar from "../../../asset/image/sedan-car.png";
import { Typography } from "@material-ui/core";

const CarSelect = () => {
  return (
    <>
      <Box>
      <Paper
        elevation={9}
        style={{
          width: "408px",
          height: "500px",
          padding: "24px",
          margin: "0 auto",
          position: "absolute",
          top:'60px',
          left: '0px',
          right: '0',
          borderRadius: '10px'
        }}
      >
        <p>Which car do you need?</p>
        <Grid container style={{ gap: 9 }}>
          <Grid
            item
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              height: "163px",
              width: "114px",
            }}
          >
            <Box width={"100%"} textAlign={"center"}>
              <img
                src={sedanCar}
                width="60px"
                height="60px"
                alt="sedan car"
                style={{
                  margin: "0 auto",
                  display: "block",
                  marginBottom: "16px",
                  marginTop: "14px",
                }}
              />
              <Typography style={{ fontSize: "14px" }}>Sedan Car</Typography>
              <Typography style={{ fontSize: "10px" }}>
                4 seat capacity
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              height: "163px",
              width: "114px",
            }}
          >
            <Box width={"100%"} textAlign={"center"}>
              <img
                src={sedanCar}
                width="60px"
                height="60px"
                alt="sedan car"
                style={{
                  margin: "0 auto",
                  display: "block",
                  marginBottom: "16px",
                  marginTop: "14px",
                }}
              />
              <Typography style={{ fontSize: "14px" }}>Sedan Car</Typography>
              <Typography style={{ fontSize: "10px" }}>
                4 seat capacity
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              height: "163px",
              width: "114px",
            }}
          >
            <Box width={"100%"} textAlign={"center"}>
              <img
                src={sedanCar}
                width="60px"
                height="60px"
                alt="sedan car"
                style={{
                  margin: "0 auto",
                  display: "block",
                  marginBottom: "16px",
                  marginTop: "14px",
                }}
              />
              <Typography style={{ fontSize: "14px" }}>Sedan Car</Typography>
              <Typography style={{ fontSize: "10px" }}>
                4 seat capacity
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              height: "163px",
              width: "114px",
            }}
          >
            <Box width={"100%"} textAlign={"center"}>
              <img
                src={sedanCar}
                width="60px"
                height="60px"
                alt="sedan car"
                style={{
                  margin: "0 auto",
                  display: "block",
                  marginBottom: "16px",
                  marginTop: "14px",
                }}
              />
              <Typography style={{ fontSize: "14px" }}>Sedan Car</Typography>
              <Typography style={{ fontSize: "10px" }}>
                4 seat capacity
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              height: "163px",
              width: "114px",
            }}
          >
            <Box width={"100%"} textAlign={"center"}>
              <img
                src={sedanCar}
                width="60px"
                height="60px"
                alt="sedan car"
                style={{
                  margin: "0 auto",
                  display: "block",
                  marginBottom: "16px",
                  marginTop: "14px",
                }}
              />
              <Typography style={{ fontSize: "14px" }}>Sedan Car</Typography>
              <Typography style={{ fontSize: "10px" }}>
                4 seat capacity
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Button  style={{backgroundColor:'#F04935', borderRadius: '1000px', color: 'white', padding: '13px 135px', margin: '0 auto', marginTop: '20px', textTransform: 'none', fontSize: '14px'}}>Request trip</Button>
      </Paper>
      </Box>
      
    </>
  );
};

export default CarSelect;
