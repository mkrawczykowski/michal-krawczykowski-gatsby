import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {isInCategory} from '../../../inc/helpers';
import Card from '../../partials/Card/Card';

const ListOfPosts = ({data, postCategories}) => {
    const allPostsQuery = useStaticQuery(graphql`
        query blogPosts{
            allWpPost(limit: 1000) {
                nodes {
                    date
                    title
                    PageTitle {
                        pageTitle
                    }
                    PostACFData {
                        postExcerpt
                    }
                    categories {
                        nodes {
                            id
                        }
                    }
                }
            }
            allWpCategory {
                nodes {
                  id
                }
              }
        }
    `)


    return(
        <Container>
            <Row>
                <Col classes="col-xs-2 col-sm-1">
                    
                </Col>
            </Row>
        </Container>
    )
}

export default ListOfPosts;

export const pageQuery = graphql`
    fragment ListOfPostsFragmentPage on WpPage_Flexiblesections_Sections_Listofposts{
        sectionsHeading
        numberOfPosts
        buttonLabel
        sourceOfPosts
        sourceCategories {
          name
          id
          uri
        }
        showLoadMoreButton
        fieldGroupName
    }
`

export const postQuery = graphql`
    fragment ListOfPostsFragmentPost on WpPost_Flexiblesections_Sections_Listofposts{
        sectionsHeading
        numberOfPosts
        buttonLabel
        sourceOfPosts
        sourceCategories {
          name
          id
          uri
        }
        showLoadMoreButton
        fieldGroupName
    }
`