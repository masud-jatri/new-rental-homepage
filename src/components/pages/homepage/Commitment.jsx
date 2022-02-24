import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import shield from '../../../asset/image/shield.svg';

const Commitment = () => {
    return (
        <>
            <Box style={{backgroundColor: '#1E88E5', padding:'60px 100px'}}>
                <img src={shield} alt="" />
                <Typography style={{marginTop: '32px', color: 'white', fontSize: '36px', fontWeight: '500'}}>
                Commitment for safety
                </Typography>
                <Grid container justifyContent='space-between' style={{marginTop: '54px'}}>
                        <Grid item style={{width: '370px'}}>
                            <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', }}>
                            Vaccinated drivers
                            </Typography>
                            <Typography style={{fontSize: '16px', fontWeight: '400', color: 'white' }}>
                            We are continuously updating our driver database to include more vaccinated drivers. Find vaccinated drivers on-the-go whenever you need it!
                            </Typography>
                        </Grid>

                        <Grid item style={{width: '370px'}}>
                            <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', }}>
                            Share trip details
                            </Typography>
                            <Typography style={{fontSize: '16px', fontWeight: '400', color: 'white' }}>
                            Going on a trip? Take your loved ones along for the ride. Share your trip and driver details for a safe and secure journey!
                            </Typography>
                        </Grid>

                        <Grid item style={{width: '370px'}}>
                            <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', }}>
                            Jatri helpline
                            </Typography>
                            <Typography style={{fontSize: '16px', fontWeight: '400', color: 'white' }}>
                            From the moment you book a trip till you reach your destination, our dedicated customer representatives are right by your side for any kind of assistance!
                            </Typography>
                        </Grid>                    
                </Grid>
            </Box>
        </>
    );
};

export default Commitment;