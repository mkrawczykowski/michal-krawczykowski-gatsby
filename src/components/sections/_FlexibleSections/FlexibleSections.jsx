import React from 'react';
import FlexibleSection from '../_FlexibleSection/FlexibleSection';

const FlexibleSections = ({sections, postCategories}) => {
    if (sections){
        return(
            sections.map(section => (
                <section>
                    <FlexibleSection postCategories={postCategories} section={section}  />    
                </section>
            ))    
        )    
    }
}

export default FlexibleSections;