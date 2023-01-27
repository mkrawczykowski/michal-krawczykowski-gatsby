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
            flexibleSections{
                fieldGroupName
                ...WYSIWYGFragmentPage
            }
        }
    }
`

const PageTemplate = ({data}) => {

    const page = {};
    page.title = data.wpPage.title;
    page.titleACF = data.wpPage.PageTitle.pageTitle;
    page.descriptionACF = data.wpPage.PageTitle.pageDescription;
    page.flexibleSections = data.wpPage.flexibleSections;

    return(
        <Layout page={page} flexibleSections={flexibleSections}>
            <Header></Header>
            <PageTitle page={page}></PageTitle>
        </Layout>
    )
}

export default PageTemplate;