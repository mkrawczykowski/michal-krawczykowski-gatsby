import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import {Container, Col, Row} from '../components/structure/Grid/Grid';

export const query = graphql`
    query($id: String!){
        wpPage(id: {eq: $id}){
            title
            id
        }
    }
`

const PageTemplate = ({data}) => {
    const id = data.wpPage.id;

    return(
        <Layout id={id}>
        </Layout>
    )
}

export default PageTemplate;