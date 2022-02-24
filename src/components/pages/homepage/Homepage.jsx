import React from 'react';
import Navbar from './../../navbar/Navbar';
import Banner from './Banner';
import BussinessTravel from './BussinessTravel';
import Commitment from './Commitment';
import CustomerReview from './CustomerReview';
import Faq from './Faq';
import RentalInstruction from './RentalInstruction';
import Statistics from './Statistics';
import WhyJatri from './WhyJatri';
import Footer from './Footer';
import { Box } from '@material-ui/core';


const Homepage = () => {
    return (
        // <Box maxWidth= '1440px' margin='0 auto'>
        <>
        <Navbar />
        <Banner />
        <RentalInstruction />
        <Statistics/>
        <WhyJatri />
        <CustomerReview />
        <BussinessTravel />
        <Commitment />
        <Faq />
        <Footer />
        </>
        
        // </Box>
    );
};

export default Homepage;