import React from 'react';
import FlexibleSection from '../_FlexibleSection/FlexibleSection';

const FlexibleSections = ({sections}) => {
    return(
        sections.map(section => (
            
            <FlexibleSection section={section} />
            
        ))    
    )
    
}

export default FlexibleSections;