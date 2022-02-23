import { Box, Grid, Typography,Button, Paper } from '@material-ui/core';
import React from 'react';
import banner from '../../../asset/image/banner.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CarSelect from './CarSelect';

const Banner = () => {
    return (
        <Box style={{background: `url(${banner})`, width: '100%', height: '488px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Grid container style={{height: '100%'}}>
                <Grid item style={{width: '753.5px'}}>
                    <Typography  style={{color:'white', margin:'132px 83.5px 0px 100px', fontWeight: '700', lineHeight: '74px', fontSize: '57px', width: '570px'}}>
                    On-demand <br /> car rental service
                    </Typography>
                    <Button style={{color: 'white', padding:'13px 24px',fontSize:'14px',fontStyle:'normal',fontWeight:'500', backgroundColor:'#F04935', borderRadius: '1000px', margin:'43px 490.5px 45px 124px', textTransform: 'none',}}>
                        Load more<ArrowDownwardIcon fontSize='small'/>
                    </Button>
                </Grid>
                <Grid item style={{width: 'calc(100% - 753.5px)', position:'relative'}}>
                    <CarSelect/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;