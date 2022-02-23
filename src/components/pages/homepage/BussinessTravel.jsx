import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import bussinessBackground from '../../../asset/image/bussinessBackground.png'
import CallMadeIcon from '@material-ui/icons/CallMade';

const bussinessTravel = () => {
    return (
        <>
            <Box style={{background: `url(${bussinessBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '80px auto', padding: '43px 60px', width: '1240px', height: '344px'}}>
                <Typography style={{fontSize: '57px', fontWeight: '400', color: '#151414', lineHeight: '74px'}}>
                    Introducing a better way <br />to travel for businesses.
                </Typography>
                <Typography style={{fontSize: '16px', fontWeight: '400', color: '#151414', marginTop: '10px', marginBottom: '30px'}}>
                Get in touch for a customized transport plan for your company.
                </Typography>
                <Button style={{textTransform: 'none', marginTop: '30px', backgroundColor: '#151414', color: 'white', borderRadius: '1000px', fontSize: '14px'}}>
                    Learn more<CallMadeIcon />
                </Button>
            </Box>
        </>
    );
};

export default bussinessTravel;