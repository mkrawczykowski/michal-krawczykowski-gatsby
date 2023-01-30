import React from 'react';
import FlexibleSection from '../_FlexibleSection/FlexibleSection';

const FlexibleSections = ({sections}) => {
    if (sections){
        return(
            sections.map(section => (
                <section>
                    <FlexibleSection section={section} />    
                </section>
            ))    
        )    
    }
}

export default FlexibleSections;