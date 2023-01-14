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
                <pre>{JSON.stringify(data, null, 2)}</pre>            
                {/* <pre>{JSON.stringify(title, null, 2)}</pre> */}
            </>

        </Layout>
    )
}

export default PageTemplate;