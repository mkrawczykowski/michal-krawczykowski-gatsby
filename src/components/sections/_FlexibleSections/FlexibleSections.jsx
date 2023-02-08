import React from 'react';
import FlexibleSection from '../_FlexibleSection/FlexibleSection';
import Section from '../../structure/Section/Section';

const FlexibleSections = ({sections, postCategories, postID}) => {
    if (sections){
        // console.log('sections')
        // console.log(sections)
        let backgroundColor;
return(
sections.map(section => {
            backgroundColor = section.backgroundColor === 'gray' ? section.backgroundColor : null;
            console.log('backgroundColor')
            console.log(backgroundColor)
                return(
                <Section backgroundColor={backgroundColor}>
                    <FlexibleSection postCategories={postCategories} section={section} postID={postID} />    
                </Section>    
                )    
            })    
)
            
    }
}

export default FlexibleSections;