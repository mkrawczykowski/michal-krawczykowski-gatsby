import React from 'react';
import {graphql} from 'gatsby';
import * as styles from './WYSIWYG.module.scss';
import {Container, Col, Row} from '../../structure/Grid/Grid';

const WYSIWYG = ({data}) => {
    const wysiwyg = data.wysiwyg;

    return(
        <section className={styles.WYSIWYG}>
            <Container>
                <Row>
                    <Col classes="col-xs-2 col-sm-1 col-2xl-1"></Col>
                    <Col classes="col-xs-2 col-sm-6 col-2xl-10">
                        <div dangerouslySetInnerHTML={{__html: wysiwyg}}></div>
                    </Col>
                    <Col classes="col-xs-2 col-sm-1 col-2xl-1"></Col>
                </Row>
            </Container>
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