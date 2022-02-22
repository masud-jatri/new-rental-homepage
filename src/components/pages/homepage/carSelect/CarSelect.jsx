import React from 'react';
import { Paper, Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import sedanCar from '../../../../asset/image/sedan-car.png'
import { Typography } from '@material-ui/core';

const CarSelect = () => {
    return (
        <>
            <Paper elevation={9} style={{width: '408px', height: '500px', padding: '24px', margin:'0 auto', marginTop: '60px'}}>
                <p>Which car do you need?</p>
                <Grid container justifyContent={'space-between'}>
                    <Grid item xs={3} style={{backgroundColor: '#F7F7F7', borderRadius:'8px', minHeight: '163px'}}>
                        <Box width={'100%'} textAlign={'center'}>
                        <img src={sedanCar} width="60px" height="60px" alt="sedan car" style={{margin:'0 auto',display: 'block', marginBottom: '16px', marginTop:'14px'}} />
                        <Typography style={{fontSize:'14px'}}>Sedan Car</Typography>
                        <Typography style={{fontSize:'10px'}}>4 seat capacity</Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={3} style={{backgroundColor: '#F7F7F7', borderRadius:'8px', minHeight: '163px'}}>
                        <Box width={'100%'} textAlign={'center'}>
                        <img src={sedanCar} width="60px" height="60px" alt="sedan car" style={{margin:'0 auto',display: 'block', marginBottom: '16px', marginTop:'14px'}} />
                        <Typography style={{fontSize:'14px'}}>Sedan Car</Typography>
                        <Typography style={{fontSize:'10px'}}>4 seat capacity</Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={3} style={{backgroundColor: '#F7F7F7', borderRadius:'8px', minHeight: '163px'}}>
                        <Box width={'100%'} textAlign={'center'}>
                        <img src={sedanCar} width="60px" height="60px" alt="sedan car" style={{margin:'0 auto',display: 'block', marginBottom: '16px', marginTop:'14px'}} />
                        <Typography style={{fontSize:'14px'}}>Sedan Car</Typography>
                        <Typography style={{fontSize:'10px'}}>4 seat capacity</Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={3} style={{backgroundColor: '#F7F7F7', borderRadius:'8px', minHeight: '163px'}}>
                        <Box width={'100%'} textAlign={'center'}>
                        <img src={sedanCar} width="60px" height="60px" alt="sedan car" style={{margin:'0 auto',display: 'block', marginBottom: '16px', marginTop:'14px'}} />
                        <Typography style={{fontSize:'14px'}}>Sedan Car</Typography>
                        <Typography style={{fontSize:'10px'}}>4 seat capacity</Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={3} style={{backgroundColor: '#F7F7F7', borderRadius:'8px', minHeight: '163px'}}>
                        <Box width={'100%'} textAlign={'center'}>
                        <img src={sedanCar} width="60px" height="60px" alt="sedan car" style={{margin:'0 auto',display: 'block', marginBottom: '16px', marginTop:'14px'}} />
                        <Typography style={{fontSize:'14px'}}>Sedan Car</Typography>
                        <Typography style={{fontSize:'10px'}}>4 seat capacity</Typography>
                        </Box>
                        
                    </Grid>

                </Grid>
            </Paper>
            
        </>
    );
};

export default CarSelect;