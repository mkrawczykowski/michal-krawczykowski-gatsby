import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import Card from '../../partials/Card/Card';

const ListOfPosts = ({data, postCategories}) => {



    isInCategory('a', ['a', 'b', 'c'])
    isInCategory('a', ['a'])
    isInCategory(['a', 'b', 'c'], 'a')
    isInCategory(['a'], 'a')
    isInCategory(1, [1, 2, 3])
    isInCategory(1, [1])
    isInCategory([1, 2, 3], 1)
    isInCategory([1], 1)

    console.log('==== FALSES ====')
    isInCategory(['a'], 'b')
    isInCategory(['b'], 'a')
    isInCategory(['a', 'b', 'c'], 'd')
    isInCategory('d', ['a', 'b', 'c'])
    isInCategory(4, [1, 2, 3])
    isInCategory(4, [1])
    isInCategory([1, 2, 3], 4)
    isInCategory([1], 4)


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