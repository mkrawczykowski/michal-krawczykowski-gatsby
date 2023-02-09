import React from 'react';
import * as styles from './Section.module.scss';

const Section = ({children, backgroundColor, section}) => {
const bgColor = backgroundColor ? `${backgroundColor}Background` : null;

    return(
        <section className={[styles.section, styles[bgColor]].join(' ')}>
            {children}
        </section>
    )
}

export default Section;