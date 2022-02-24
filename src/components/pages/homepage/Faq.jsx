import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

const Faq = () => {

    return (
        <>
            <Box padding='100px' bgcolor='#fff'>
                <Typography style={{fontSize: '36px', fontWeight: '500'}}>
                Frequently asked questions
                </Typography>
                <Box marginTop='60px'>
                    <Accordion style={{boxShadow: 'none'}}>
                        <AccordionSummary  expandIcon={<AddIcon />}>
                            <Typography style={{fontSize: '24px', fontWeight: '500'}}>
                            Why can't I see the fare before placing a trip request?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontSize: '16px', fontWeight: '400'}}>
                            Once you place a trip request, our partners will bid on your trip. You can sort through the bids to find the best car at a suitable price for your needs. This lets you receive multiple prices at once with the flexibility and freedom to choose.
                            </Typography>
                       
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{boxShadow: 'none'}}>
                        <AccordionSummary  expandIcon={<AddIcon />}>
                            <Typography style={{fontSize: '24px', fontWeight: '500'}}>
                                How long should I wait for the bidding process?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontSize: '16px', fontWeight: '400'}}>
                                We recommend waiting up to 90 minutes for our partners to complete bidding. 
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{boxShadow: 'none'}}>
                        <AccordionSummary  expandIcon={<AddIcon />}>
                        <Typography style={{fontSize: '24px', fontWeight: '500'}}>
                            When can I cancel my trip?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize: '16px', fontWeight: '400'}}>
                            You can cancel your trip until 2 hours before the trip time.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{boxShadow: 'none'}}>
                        <AccordionSummary  expandIcon={<AddIcon />}>
                        <Typography style={{fontSize: '24px', fontWeight: '500'}}>
                            How can I cancel my trip?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize: '16px', fontWeight: '400'}}>
                            Please call our customer service at 09642080808 to cancel your trip.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{boxShadow: 'none'}}>
                        <AccordionSummary  expandIcon={<AddIcon />}>
                        <Typography style={{fontSize: '24px', fontWeight: '500'}}>
                            Are there any hidden charges?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize: '16px', fontWeight: '400'}}>
                            You only have to pay the bidding price shown in the app. We don’t have any additional charges.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Box>
            </Box> 
        </>
    );
};

export default Faq;