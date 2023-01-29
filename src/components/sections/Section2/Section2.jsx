import React from 'react';
import {graphql} from 'gatsby';
import WYSIWYG from '../WYSIWYG/WYSIWYG';

const Section2 = ({fieldGroupName, sectionData}) => {
    let sectionName = fieldGroupName.substring(fieldGroupName.lastIndexOf('_')+1, fieldGroupName.length);
    console.log('=========sectionData=========')
    console.log(sectionData)
        switch(sectionName){
            case 'Wysiwyg':
                console.log(sectionName)
                console.log('sectionName')
                return <WYSIWYG data={sectionData} />
            break;
        }
}

export default Section2;

export const pageQuery = graphql`
    fragment SectionFragmentPage on WpPage_Flexiblesections_Sections_Section{
        fieldGroupName
        sections{
            ...WYSIWYGFragmentPageSection
        }
    }
`