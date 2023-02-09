import React from 'react';
import FlexibleSection from '../_FlexibleSection/FlexibleSection';
import Section from '../../structure/Section/Section';

const FlexibleSections = ({sections, postCategories, postID}) => {
    if (sections){
        let backgroundColor;
        return(
        sections.map(section => {
            backgroundColor = section.backgroundColor === 'gray' ? section.backgroundColor : null;
                return(
                    <Section backgroundColor={backgroundColor} section={section}>
                        <FlexibleSection postCategories={postCategories} section={section} postID={postID} />    
                    </Section>
                )    
            })
        ) 
    }
}

export default FlexibleSections;