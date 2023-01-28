import React from 'react';
import {graphql} from 'gatsby';
import * as styles from './WYSIWYG.module.scss';

const WYSIWYG = ({data}) => {
    const wysiwyg = data.wysiwyg;

    return(
        <section className={styles.WYSIWYG}>
            <div dangerouslySetInnerHTML={{__html: wysiwyg}}></div>
        </section>
    )
}

export default WYSIWYG;

export const postQuery = graphql`
    fragment WYSIWYGFragmentPost on WpPost_Flexiblesections_Sections_Wysiwyg{
        wysiwyg
        fieldGroupName
    }
`

export const pageQuery = graphql`
    fragment WYSIWYGFragmentPage on WpPage_Flexiblesections_Sections_Wysiwyg{
        wysiwyg
        fieldGroupName
    }
`