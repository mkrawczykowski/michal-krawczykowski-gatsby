import React from 'react';
import WYSIWYG from '../WYSIWYG/WYSIWYG';

const FlexibleSections = ({fieldGroupName, sectionData}) => {
    let sectionName = fieldGroupName.substring(fieldGroupName.lastIndexOf('_')+1, fieldGroupName.length);

    switch(sectionName){
        case 'Wysiwyg':
          return <WYSIWYG data={sectionData} />
    }
}

export default FlexibleSections;