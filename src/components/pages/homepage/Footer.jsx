import { Box, Grid, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import brandLogoWhite from '../../../asset/image/brand-logo-white.svg';
import gotoPlayStore from '../../../asset/image/goto-play-store.svg'
import gotoJatri from '../../../asset/image/goto-jatri.svg';
import support from '../../../asset/image/support.svg'
import phone from '../../../asset/image/phone.svg'
import footerLocation from '../../../asset/image/footer-location.svg'
import facebookLogo from '../../../asset/image/facebook-logo.svg'
import youtubeLogo from  '../../../asset/image/youtube-logo.svg'
import linkedinLogo from '../../../asset/image/linkedin-logo.svg'
import React from 'react';

const Footer = () => {
    return (
        <>
            <Box bgcolor='#F04935' padding='60px 100px'>
                <Grid container justifyContent='space-between' >
                    <Grid item>
                        <Box>
                        <img src={brandLogoWhite} alt="" style={{fill: 'white'}}/>
                        </Box>
                        <Box style={{marginTop: '23px'}}>
                            <img src={gotoPlayStore} alt="" />
                            <img src={gotoJatri} alt="" style={{marginLeft: '14px'}} />
                        </Box>
                        <Grid container alignItems="center" style={{marginTop: '35px', marginBottom: '22px', }}>
                            <img src={support} alt="" style={{display: 'block'}} />
                            <Typography style={{display: 'inline-block', color: 'white',fontSize: '20px', fontWeight: '400', marginLeft: '12.5px'}}>
                                support@jatri.co
                            </Typography>                           
                        </Grid>
                        <Grid container alignItems="center" style={{marginBottom: '22px', }}>
                            <img src={phone} alt="" style={{display: 'block'}}  />
                            <Typography style={{display: 'inline-block', color: 'white',fontSize: '20px', fontWeight: '400', marginLeft: '12.5px'}}>
                                09642080808
                            </Typography>
                        </Grid>
                        <Grid container alignItems="center">
                            <img src={footerLocation} alt="" style={{display: 'block'}} />
                            <Typography style={{display: 'inline-block', color: 'white',fontSize: '20px', fontWeight: '400', marginLeft: '12.5px'}}>
                                Banani, Road-2, block- l. House-23 Dhaka 1213
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Box >
                            <Grid container >
                                <Grid item style ={{marginRight: '170px'}}>
                                    <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', marginBottom: '24px'}}>
                                    Our services
                                    </Typography>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        Rental
                                        </Typography>
                                    </Link>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        Digital Ticketing 
                                        </Typography>
                                    </Link>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        Business
                                        </Typography>
                                    </Link>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        Jatri Partner
                                        </Typography>
                                    </Link>
                                </Grid>

                                <Grid item >
                                    <Typography style={{fontSize: '24px', fontWeight: '500', color: 'white', marginBottom: '24px'}}>
                                    About us
                                    </Typography>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        Jatri
                                        </Typography>
                                    </Link>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        About us
                                        </Typography>
                                    </Link>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        Our team
                                        </Typography>
                                    </Link>
                                    <Link to='#' style={{textDecoration: 'none'}}>
                                        <Typography style={{color: 'white', fontSize: '16px', fontWeight: '400', margin:'14px 0'}}>
                                        Blog
                                        </Typography>
                                    </Link>
                                    <Box marginTop='42px'>
                                        <Link to='#' >
                                            <img src={facebookLogo} alt="" />
                                        </Link>
                                        <Link to='#' style={{marginLeft: '50px'}}>
                                            <img src={youtubeLogo} alt="" />
                                        </Link>
                                        <Link to='#' style={{marginLeft: '50px'}}>
                                            <img src={linkedinLogo} alt="" />
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;