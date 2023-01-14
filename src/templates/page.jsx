import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';

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
            <>
                {title}
            </>

        </Layout>
    )
}

export default PageTemplate;