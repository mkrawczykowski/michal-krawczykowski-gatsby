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
                    ... on WpPage_Flexiblesections_Sections_Section{
                    fieldGroupName
                        sections{
                            ...WYSIWYGFragmentPageSection
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
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <main>
                <PageTitle title={title} titleACF={titleACF} descriptionACF={descriptionACF}></PageTitle>
                <FlexibleSections sections={flexibleSections}></FlexibleSections>
                    {/* //optional chaining
                    // flexibleSections?.map((flexibleSection, flexibleSectionIndex) => {
                    //     const {fieldGroupName, ...sectionData} = flexibleSection;
                        
                    //     return(
                    //         <FlexibleSections key={flexibleSectionIndex} flexibleSection={flexibleSection} fieldGroupName={fieldGroupName} sectionData={sectionData}></FlexibleSections>    
                    //     )
                    // }) 
                }*/}
                
            </main>
        </Layout>
    )
}

export default PageTemplate;