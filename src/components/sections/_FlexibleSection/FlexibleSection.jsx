import React from 'react';
import WYSIWYG from '../WYSIWYG/WYSIWYG';
import ListOfPosts from '../ListOfPosts/ListOfPosts';

const FlexibleSection = ({section}) => {
    let sections = [];
    const generateNestedSections = () => {
        if (section.sections){
            section.sections.map(nestedSection => {
            sections.push(<FlexibleSection section={nestedSection} />) 
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

    switch(sectionName){
        case 'Wysiwyg':
            sections.push(<WYSIWYG data={section} />)
        case 'ListOfPosts':
            sections.push(<ListOfPosts data={section} />)
        case 'Section':
            generateNestedSections();
            break;
    }  

    return (
        printSections(sections)
    )
}

export default FlexibleSection;