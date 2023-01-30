import React from 'react';
import WYSIWYG from '../WYSIWYG/WYSIWYG';

const FlexibleSection = ({section}) => {
    let sections = [];
    const generateNestedSections = () => {
        if (section.sections){
            console.log('section');
            console.log(section);
            console.log('section.sections');
            console.log(section.sections);
            section.sections.map(nestedSection => {
            sections.push(<FlexibleSection section={nestedSection} />) 
            console.log('sections')
            console.log(sections)
            console.log('======================')
        });
        }

    }
    

    const printSections = (sections) => {
        return(
        sections.map(section => {
            return section;
        })    
        )
        
    }


    let sectionName = section.fieldGroupName.substring(section.fieldGroupName.lastIndexOf('_')+1, section.fieldGroupName.length);

    // return(
    //     <>
    //     <pre>{JSON.stringify(section, null, 2)}</pre>
    //     {
    //       sectionName
    //     }
    //     </>
    // )

    // switch(sectionName){
    //             case 'Wysiwyg':
    //             return <WYSIWYG data={section} />
    //             case 'Section':
                
    //         }
    
    //=========================== BELOW Kind of works ========================
// return(
//     <>  
            
//         <WYSIWYG data={section} />
//         {console.log(nestedSections)}
//         {nestedSections? nestedSections : null}
//     </>
// )


     switch(sectionName){
            case 'Wysiwyg':
                sections.push(<WYSIWYG data={section} />)
            case 'Section':
                generateNestedSections();
                break;
        }  

  
        return (

                    printSections(sections)
            
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