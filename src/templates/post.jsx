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
                    ...ListOfPostsFragmentPost
                    ... on WpPost_Flexiblesections_Sections_Section{
                    fieldGroupName
                        sections{
                            ...WYSIWYGFragmentPostSection
                        }
                    }
                    
                }
            }
            categories {
                nodes {
                    id
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
    const postCategories = data.wpPost.categories.nodes;
    console.log('=======postCategories===========')
    console.log(postCategories)

    return(
        <Layout>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <main>
                <PageTitle title={title} titleACF={titleACF} descriptionACF={descriptionACF}></PageTitle>
                {
                    flexibleSections ? <FlexibleSections sections={flexibleSections} postCategories={postCategories}></FlexibleSections> : null
                }
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

export default PostTemplate;