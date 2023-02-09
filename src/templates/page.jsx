import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/sections/_FlexibleSections/FlexibleSections';
import PageTitle from '../components/structure/PageTitle/PageTitle';

export const query = graphql`
    query($id: String!){
        wpPage(id: {eq: $id}){
            title
            PageTitle{
                pageDescription
                pageTitle
            }
            flexibleSections{
                sections{
                    ...WYSIWYGFragmentPage
                    ...ListOfPostsFragmentPage
                    ... on WpPage_Flexiblesections_Sections_Section{
                    fieldGroupName
                    backgroundColor
                        sections{
                            ...WYSIWYGFragmentPageSection
                            ...ListOfPostsFragmentPageSection
                        }
                    }
                    
                }
            }
        }
    }
`

const PageTemplate = ({data}) => {

    const title = data.wpPage.title;
    const titleACF = data.wpPage.PageTitle.pageTitle;
    const descriptionACF = data.wpPage.PageTitle.pageDescription;
    const flexibleSections = data.wpPage.flexibleSections.sections;
    // console.log('flexibleSections');
    // console.log(flexibleSections);

    return(
        <Layout>
            <main>
                <PageTitle title={title} titleACF={titleACF} descriptionACF={descriptionACF}></PageTitle>
                {
                    flexibleSections ? <FlexibleSections sections={flexibleSections}></FlexibleSections> : null
                }
            </main>
        </Layout>
    )
}

export default PageTemplate;