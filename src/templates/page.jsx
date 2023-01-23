import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';

export const query = graphql`
    query($id: String!){
        wpPage(id: {eq: $id}){
            title
            PageTitle{
                pageDescription
                pageTitle
            }
        }
    }
`

const PageTemplate = ({data}) => {

    const page = {};
    page.title = data.wpPage.title;
    page.titleACF = data.wpPage.PageTitle.pageTitle;
    page.descriptionACF = data.wpPage.PageTitle.pageDescription;

    return(
        <Layout page={page}>
        </Layout>
    )
}

export default PageTemplate;