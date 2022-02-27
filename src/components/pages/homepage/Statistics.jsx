import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

const Statistics = () => {
    return (
        <>
            <Box marginTop='100px' padding='0px 100px' >
                <Grid container justifyContent='space-between'  style={{padding: '50px 87px', backgroundColor: '#F4F4F4', borderRadius: '16px', gap: '120px'}}>
                    <Grid item style={{width: '14%'}}>
                        <Typography style={{ fontSize:'64px', fontWeight: '700' }}>
                        5K+
                        </Typography>
                        <Typography style={{ fontSize:'20px', fontWeight: '400' }}>
                        Nationwide partners
                        </Typography>
                    </Grid>
                    <Grid item style={{width: '14%'}}>
                        <Typography style={{ fontSize:'64px', fontWeight: '700' }}>
                        30K+
                        </Typography>
                        <Typography style={{ fontSize:'20px', fontWeight: '400' }}>
                        Active users
                        </Typography>
                    </Grid>
                    <Grid item style={{width: '14%'}}>
                        <Typography style={{ fontSize:'64px', fontWeight: '700' }}>
                        10K
                        </Typography>
                        <Typography style={{ fontSize:'20px', fontWeight: '400' }}>
                        Completed rides
                        </Typography>
                    </Grid>
                    <Grid item style={{width: '14%'}}>
                        <Typography style={{ fontSize:'64px', fontWeight: '700' }}>
                        18K
                        </Typography>
                        <Typography style={{ fontSize:'20px', fontWeight: '400' }}>
                        Registered vehicles
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Statistics;