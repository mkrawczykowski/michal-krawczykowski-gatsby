import React from 'react';
import WYSIWYG from '../WYSIWYG/WYSIWYG';
import ListOfPosts from '../ListOfPosts/ListOfPosts';

const FlexibleSection = ({section, postCategories, postID}) => {
    let sections = [];
    const generateNestedSections = () => {
        if (section.sections){
            section.sections.map(nestedSection => {
            sections.push(<FlexibleSection section={nestedSection} postID={postID} postCategories={postCategories} />) 
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
            break;
        case 'Listofposts':
            sections.push(<ListOfPosts postCategories={postCategories} data={section} postID={postID} />)
            break;
        case 'Section':
            generateNestedSections();
            break;
    }  

    return (
        printSections(sections)
    )
}

export default FlexibleSection;