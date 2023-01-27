import React from 'react';
import * as styles from './WYSIWYG.module.scss';

const WYSIWYG = () => {
    return(
        <section className={styles.WYSIWYG}>
            <p>test</p>
        </section>
    )
}

export default WYSIWYG;

export const postQuery = graphql`
    fragment WYSIWYGFragmentPost on WpPost_Flexiblesections_Sections_Wysiwyg{
        wysiwyg
    }
`

export const pageQuery = graphql`
    fragment WYSIWYGFragmentPage on WpPage_Flexiblesections_Sections_Wysiwyg{
        wysiwyg
    }
`