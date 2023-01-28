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

    return(
        <Layout>
            <main>
                <PageTitle title={title} titleACF={titleACF} descriptionACF={descriptionACF}></PageTitle>
                {
                    //optional chaining
                    flexibleSections?.map((flexibleSection, flexibleSectionIndex) => {
                        const {fieldGroupName, ...sectionData} = flexibleSection;
                        // console.log(fieldGroupName);
                        // console.log(sectionData.wysiwyg);
                        
                        return(
                            <FlexibleSections key={flexibleSectionIndex} fieldGroupName={fieldGroupName} sectionData={sectionData}></FlexibleSections>    
                        )
                    })
                }
                
            </main>
        </Layout>
    )
}

export default PageTemplate;