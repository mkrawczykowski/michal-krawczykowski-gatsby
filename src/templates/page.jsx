import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import {Container, Col, Row} from '../components/structure/Grid/Grid';

export const query = graphql`
    query($id: String!){
        wpPage(id: {eq: $id}){
            slug
            title
        }
    }
`

const PageTemplate = ({data}) => {
    const title = data.wpPage.title;
    const slug = data.wpPage.slug;
    return(
        <Layout>
            <Container>
                <Row>
                    <Col classes="col-12 col-lg-6">{title}</Col>
                    <Col classes="col-12 col-lg-6">
                        eee
                        {/* <Row>
                            <Col classes="col-6">asd</Col>
                        </Row> */}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PageTemplate;