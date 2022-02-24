import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import React from 'react';

const CustomAccordion = (props) => {
    const {summary, details} = props;
    return (
        
        <>
            <Accordion style={{boxShadow: 'none'}}>
                    <AccordionSummary  expandIcon={<AddIcon />}>
                        <Typography style={{fontSize: '24px', fontWeight: '500'}}>
                        {summary}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontSize: '16px', fontWeight: '400'}}>
                            {details}
                        </Typography>
                    
                    </AccordionDetails>
            </Accordion>
        </>
       
    );
};

export default CustomAccordion;