import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import * as styles from './PageTitle.module.scss';
import {Container, Row, Col} from '../Grid/Grid';

const PageTitle = () => {
    // const data = useStaticQuery(graphql`
    //     query PageTitleQuery($id: String!){
    //         wpPage(id: {eq: $id}){
                
    //         }
    //     }
    // `)
    return(
        <Container>
            <Row>
                <Col>test</Col>
            </Row>
        </Container>
    )
}

export default PageTitle;