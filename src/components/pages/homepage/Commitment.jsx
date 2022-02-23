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
                <Grid container>
                    <Grid item>
                        <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', width: '370px'}}>
                        Vaccinated drivers
                        </Typography>
                        <Typography>
                        We are continuously updating our driver database to include more vaccinated drivers. Find vaccinated drivers on-the-go whenever you need it!
                        </Typography>
                        

                        <Grid item>
                        <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', width: '370px'}}>
                        Share trip details
                        </Typography>
                        <Typography>
                        Going on a trip? Take your loved ones along for the ride. Share your trip and driver details for a safe and secure journey!
                        </Typography>
                        </Grid>

                        <Grid item>
                        <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', width: '370px'}}>
                        Jatri helpline
                        </Typography>
                        <Typography>
                        From the moment you book a trip till you reach your destination, our dedicated customer representatives are right by your side for any kind of assistance!
                        </Typography>
                        </Grid>

                    </Grid>
                    <Grid>

                    </Grid>
                    <Grid>
                        
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Commitment;