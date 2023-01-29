import React from 'react';
import Section2 from '../Section2/Section2';
import WYSIWYG from '../WYSIWYG/WYSIWYG';

const FlexibleSections = ({fieldGroupName, sectionData}) => {
    let sectionName = fieldGroupName.substring(fieldGroupName.lastIndexOf('_')+1, fieldGroupName.length);

    switch(sectionName){
        case 'Wysiwyg':
          return <WYSIWYG data={sectionData} />
        break;
        case 'Section':
            const flexibleSections = sectionData.sections;
            console.log('-flexibleSections-')
            console.log(flexibleSections)

                flexibleSections?.map((flexibleSection, flexibleSectionIndex) => {
                    const {fieldGroupName, ...sectionData} = flexibleSection;
                    console.log('fieldGroupName')
                    console.log(fieldGroupName)
                    console.log('sectionData')
                    console.log(sectionData)
                    return(
                        // <FlexibleSections key={flexibleSectionIndex} fieldGroupName={fieldGroupName} sectionData={sectionData}></FlexibleSections>    
                        <Section2 fieldGroupName={fieldGroupName} sectionData={sectionData}></Section2>
                    )
                })               
        break;
    }
}

export default FlexibleSections;