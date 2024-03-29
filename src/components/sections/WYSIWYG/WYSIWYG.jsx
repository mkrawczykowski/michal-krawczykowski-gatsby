import React from 'react';
import {graphql} from 'gatsby';
import * as styles from './WYSIWYG.module.scss';
import {Container, Col, Row} from '../../structure/Grid/Grid';

const WYSIWYG = ({data}) => {
    const wysiwyg = data.wysiwyg;

    return(
            <Container>
                <Row>
                    <Col classes="col-xs-2 col-sm-1 col-2xl-1"></Col>
                    <Col classes="col-xs-2 col-sm-6 col-2xl-10" innerHTML={{__html: wysiwyg}}>
                    </Col>
                    <Col classes="col-xs-2 col-sm-1 col-2xl-1"></Col>
                </Row>
            </Container>
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

export const pageQuerySection = graphql`
    fragment WYSIWYGFragmentPageSection on WpPage_Flexiblesections_Sections_Section_Sections_Wysiwyg{
        wysiwyg
        fieldGroupName
    }
`

export const postQuerySection = graphql`
    fragment WYSIWYGFragmentPostSection on WpPost_Flexiblesections_Sections_Section_Sections_Wysiwyg{
        wysiwyg
        fieldGroupName
    }
`