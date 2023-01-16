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
                    <Col classes="col-6 col-lg-12 col-xl-7">{title}</Col>
                    {/* <Col classes="col-6 col-lg-12 col-xxl-7">
                        <Row>
                            <Col classes="col-6">asd</Col>
                        </Row>
                    </Col> */}
                </Row>
            </Container>
        </Layout>
    )
}

export default PageTemplate;