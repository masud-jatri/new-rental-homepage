import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import location from '../../../asset/image/location.svg';
import list from '../../../asset/image/list.svg';
import tick from '../../../asset/image/tick.svg';
import { Box } from '@material-ui/core';

const RentalInstruction = () => {
    return (
        <>
            <Box marginTop='139px' padding= '0px 100px'>
            <Typography style={{ fontSize: '44px', fontWeight: '500' }}>Rent a car in 3 easy steps...</Typography>
                <Grid container justifyContent='space-between' style={{ marginTop:'70px'}}>
                    <Grid item style={{width:'315px'}}>
                        <img src={location} alt="location" style={{}} />
                        <Typography style={{ fontSize: '24px', fontWeight: '500' }}>
                        Enter your travel details
                        </Typography>
                        <Typography style={{ fontSize: '16px', fontWeight: '400' }}>
                        Enter your pickup, destination and trip details to place a trip request.
                        </Typography>
                    </Grid>
                    <Grid item style={{width:'315px'}}>
                        <img src={list} alt="location" style={{}} />
                        <Typography style={{ fontSize: '24px', fontWeight: '500' }}>
                        Browse through bids
                        </Typography>
                        <Typography style={{ fontSize: '16px', fontWeight: '400' }}>
                        Go through the bids rolling in from Jatri Partners to pick the best price.
                        </Typography>
                    </Grid>
                    <Grid item style={{width:'315px'}}>
                        <img src={tick} alt="location" style={{}} />
                        <Typography style={{ fontSize: '24px', fontWeight: '500' }}>
                        Confirm your trip
                        </Typography>
                        <Typography style={{ fontSize: '16px', fontWeight: '400' }}>
                        Select your car based on driver rating and pocket-friendly prices. Have a great journey!
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            
        </>
    );
};

export default RentalInstruction;