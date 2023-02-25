import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import {Container, Row, Col} from '../components/structure/Grid/Grid';
import {getImage} from 'gatsby-plugin-image';
import FlexibleSections from '../components/sections/_FlexibleSections/FlexibleSections';
import PageTitle from '../components/structure/PageTitle/PageTitle';
import FeaturedImage from '../components/partials/FeaturedImage/FeaturedImage';

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
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                width: 1920
                                placeholder: BLURRED
                                formats: WEBP
                                aspectRatio: 2
                                sizes: ""
                                breakpoints: [576, 744, 992, 1200, 1400, 1800]
                                layout: CONSTRAINED
                                outputPixelDensities: [1, 2]
                            )
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

const PostTemplate = ({data, pageContext }) => {

    const postID = pageContext.id;
    const title = data.wpPost.title;
    const titleACF = data.wpPost.PageTitle.pageTitle;
    const descriptionACF = data.wpPost.PageTitle.pageDescription;
    const flexibleSections = data.wpPost.flexibleSections.sections;
    const postCategories = data.wpPost.categories.nodes;
    const featuredImage = data.wpPost.featuredImage ? getImage(data.wpPost.featuredImage.node.localFile) : null;
    const featuredImageAlt = featuredImage ? data.wpPost.featuredImage.node.altText : null;
    return(
        <Layout>
            <pre>{JSON.stringify(data.featuredImage, null, 2)}</pre>
            <main>
                <PageTitle title={title} titleACF={titleACF} descriptionACF={descriptionACF}></PageTitle>
                <Container>
                    <Row>
                        <Col classes="col col-xxl-1"></Col>
                        <Col classes="col-2 col-md-8 col-xxl-10">
                            {
                                featuredImage ? <FeaturedImage image={featuredImage} alt={featuredImageAlt} /> : null
                            }
                        </Col>
                        <Col classes="col col-xxl-1"></Col>
                    </Row>
                </Container>
                {
                    flexibleSections ? <FlexibleSections sections={flexibleSections} postCategories={postCategories} postID={postID}></FlexibleSections> : null
                }
            </main>
        </Layout>
    )
}

export default PostTemplate;