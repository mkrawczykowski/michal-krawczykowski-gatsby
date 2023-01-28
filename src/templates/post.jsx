import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/sections/_FlexibleSections/FlexibleSections';
import PageTitle from '../components/structure/PageTitle/PageTitle';

export const query = graphql`
    query($id: String!){
        wpPost(id: {eq: $id}){
            title
            PageTitle{
                pageDescription
                pageTitle
            }
            flexibleSections{
                sections{
                    ...WYSIWYGFragmentPost
                }
            }
        }
    }
`

const PostTemplate = ({data}) => {

    const title = data.wpPost.title;
    const titleACF = data.wpPost.PageTitle.pageTitle;
    const descriptionACF = data.wpPost.PageTitle.pageDescription;
    const flexibleSections = data.wpPost.flexibleSections.sections;

    return(
        <Layout>
            <main>
                <PageTitle title={title} titleACF={titleACF} descriptionACF={descriptionACF}></PageTitle>
                {
                    //optional chaining
                    flexibleSections?.map((flexibleSection, flexibleSectionIndex) => {
                        const {fieldGroupName, ...sectionData} = flexibleSection;
                        
                        return(
                            <FlexibleSections key={flexibleSectionIndex} fieldGroupName={fieldGroupName} sectionData={sectionData}></FlexibleSections>    
                        )
                    })
                }
                
            </main>
        </Layout>
    )
}

export default PostTemplate;