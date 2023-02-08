import React from 'react';
import * as styles from './Section.module.scss';

const Section = ({children, backgroundColor}) => {
const bgColor = backgroundColor ?  `${backgroundColor}Background` : null;
console.log('bgColor')
console.log(bgColor)
    return(
        <section className={[styles.section, styles[bgColor]].join(' ')}>
            
            {children}
        </section>
    )
}

export default Section;