import React from 'react';
import Navbar from './../../navbar/Navbar';
import Banner from './Banner';
import BussinessTravel from './BussinessTravel';
import Commitment from './Commitment';
import CustomerReview from './CustomerReview';
import RentalInstruction from './RentalInstruction';
import Statistics from './Statistics';
import WhyJatri from './WhyJatri';



const Homepage = () => {
    return (
        <>
        <Navbar />
        <Banner />
        <RentalInstruction />
        <Statistics/>
        <WhyJatri />
        <CustomerReview />
        <BussinessTravel />
        <Commitment />
        </>
    );
};

export default Homepage;