import React from 'react';

const FlexibleSection = ({section}) => {
    const nestedSections = (section.sections || []).map(nestedSection => {
        return <FlexibleSection section={nestedSection} />;
    });

    let sectionName = section.fieldGroupName.substring(section.fieldGroupName.lastIndexOf('_')+1, section.fieldGroupName.length);

    return(
        <>
        <pre>{JSON.stringify(section, null, 2)}</pre>
        {
          sectionName
        }
        </>
        
    )
    // let sectionName = fieldGroupName.substring(fieldGroupName.lastIndexOf('_')+1, fieldGroupName.length);

    // (() => {
    //     switch(sectionName){
    //         case 'Wysiwyg':
    //         return <WYSIWYG data={sectionData} />
    //         case 'Section':
                
    //             const flexibleSections = sectionData.sections;
    
    //                 flexibleSections?.map((flexibleSection, flexibleSectionIndex) => {
    //                     const {fieldGroupName, ...sectionData} = flexibleSection;
    //                     console.log(flexibleSection)
    //                     return <FlexibleSections fieldGroupName={fieldGroupName} sectionData={sectionData}></FlexibleSections>
    //                 })
    //     }
    // })()
}

export default FlexibleSection;