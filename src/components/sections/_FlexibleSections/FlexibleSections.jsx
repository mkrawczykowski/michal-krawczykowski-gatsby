import React from 'react';
import FlexibleSection from '../_FlexibleSection/FlexibleSection';

const FlexibleSections = ({sections, postCategories, postID}) => {
    if (sections){
        return(
            sections.map(section => (
                <section>
                    <FlexibleSection postCategories={postCategories} section={section} postID={postID} />    
                </section>
            ))    
        )    
    }
}

export default FlexibleSections;