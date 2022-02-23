import { Avatar, Box, Divider, Grid, Typography } from '@material-ui/core';
import user1 from '../../../asset/image/user/user-1.png';
import user2 from '../../../asset/image/user/user-2.png';
import user3 from '../../../asset/image/user/user-3.png';
import user4 from '../../../asset/image/user/user-4.png';
import React from 'react';

const CustomerReview = () => {
    return (
        <>
            <Box bgcolor= 'rgba(240, 73, 53, 0.06)' padding='60px 100px'>
                <Typography style={{fontSize: '24px', fontWeight: '500', color: '#8D8D8F', marginBottom: '20px'}}>
                What users say about us
                </Typography>
                <Divider light />
                <Grid container justifyContent='space-between' style={{margin: '40px 0'}}>
                    <Grid item style={{width: '852px'}}>
                        <Typography style={{fontSize: '36px', fontWeight: '400'}}>
                        “Jatri app replicates the real-life experience of booking a trip from a rental shop. I love how I get multiple prices from multiple drivers at once. Will definitely book again!”.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{width: '295px', fontSize: '24px', fontWeight: '500', textAlign: 'right'}}>
                        Akib Amin <br/><Typography style={{fontSize: '16px', fontWeight: '400', color: '#676668'}}>Jatri user</Typography>
                        </Typography>
                    </Grid>
                </Grid>
                <Divider light />
                <Grid container justifyContent='flex-end' style={{marginTop: '30px'}} >
                    <Grid item>
                        <Avatar src={user1} alt='user-1' style={{width:'100px', height:'100px',marginLeft:'60px'}} />
                    </Grid>
                    <Grid item>
                    <Avatar src={user2} alt='user-2' style={{width:'100px', height:'100px',marginLeft:'60px'}} />
                    </Grid>
                    <Grid item>
                    <Avatar src={user3} alt='user-3' style={{width:'100px', height:'100px',marginLeft:'60px'}} />
                    </Grid>
                    <Grid item>
                    <Avatar src={user4} alt='user-4' style={{width:'100px', height:'100px',marginLeft:'60px'}} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default CustomerReview;