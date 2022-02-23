import React from 'react';
import { Box, Divider, List, ListItem, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const WhyJatri = () => {
    return (
        <>
            <Box padding='0 100px' marginTop='100px'>
                <Typography style={{ fontSize:'24px', fontWeight:'500', color: '#8D8D8F' }}>
                Why choose Jatri Rentals?
                </Typography>
                <List>
                    <ListItem>
                        <Grid container alignItems='center' style={{margin: '52px 0'}}>
                            
                            <Grid item>
                                <Typography style={{ fontSize:'36px'}}>
                                    1
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography style={{ fontSize:'36px', fontWeight:'500',width: '438px', marginLeft: '60px'}}>
                                Easy and simple
                                </Typography>
                            </Grid>
                            
                            <Grid item>
                                <Typography style={{ fontSize:'16px', fontWeight: '400', width: '465px', marginLeft: '219px'}}>
                                Our services are designed to provide you a seamless rental booking experience.
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider light />

                    <ListItem>
                        <Grid container alignItems='center' style={{margin: '52px 0'}}>
                            
                            <Grid item>
                                <Typography style={{ fontSize:'36px'}}>
                                    2
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography style={{ fontSize:'36px',fontWeight:'500', width: '438px', marginLeft: '60px'}}>
                                All of your needs covered
                                </Typography>
                            </Grid>
                            
                            <Grid item>
                                <Typography style={{ fontSize:'16px', fontWeight: '400', width: '465px', marginLeft: '219px'}}>
                                Travelling solo or with your extended family? We have multiple vehicle types to suit your needs!
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider light />

                    <ListItem>
                        <Grid container alignItems='center' style={{margin: '52px 0'}}>
                            
                            <Grid item>
                                <Typography style={{ fontSize:'36px'}}>
                                    3
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography style={{ fontSize:'36px',fontWeight:'500', width: '438px', marginLeft: '60px'}}>
                                Pocket-friendly prices
                                </Typography>
                            </Grid>
                            
                            <Grid item>
                                <Typography style={{ fontSize:'16px', fontWeight: '400', width: '465px', marginLeft: '219px'}}>
                                Enjoy  multiple bids from rental owners all over the city, in just a few minutes!
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    
                    
                </List>
            </Box>
        </>
    );
};

export default WhyJatri;