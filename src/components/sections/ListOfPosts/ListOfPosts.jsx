import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {isInCategory} from '../../../inc/helpers';
import Card from '../../partials/Card/Card';

const ListOfPosts = ({data, postCategories, postID}) => {
    const allPostsQuery = useStaticQuery(graphql`
        query blogPosts{
            allWpPost(limit: 1000) {
                nodes {
                    id
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

    const dSourceOfPosts = data.sourceOfPosts;
    const dSourceCategories = data.sourceCategories;
    const dPostAllCategories = postCategories;
    const dPostID = postID;
    let sourceCategories = [];
    const qAllPosts = allPostsQuery.allWpPost.nodes;
    const qAllCategories = allPostsQuery.allWpCategory.nodes.map(qAllCategory => {
        return qAllCategory.id;
    });

    switch (dSourceOfPosts){
        case 'Selected category(ies)':
            console.log('Selected category(ies)')
            sourceCategories = dSourceCategories.map(dSourceCategory => sourceCategories.push(dSourceCategory.id));
        break;
        case 'All categories':
            console.log('All categories')
            sourceCategories = qAllCategories.map(qAllCategory => sourceCategories.push(qAllCategory.id));
        break;
        case 'Current post\'s category(ies)':
            console.log('current')
            if (dPostAllCategories){
                sourceCategories = dPostAllCategories.map(dPostAllCategory => {
                   return dPostAllCategory.id;
                })
            }
            if (!dPostAllCategories){
                sourceCategories = 0;
            }
        break;
    }
    console.log('sourceCategories')
    console.log(sourceCategories)
    console.log('qAllCategories')
    console.log(qAllCategories)
    console.log('isInCategory(sourceCategories, qAllCategories)')
    console.log(isInCategory(sourceCategories, qAllCategories))
    console.log('=========dSourceCategories==========');
    console.log(dSourceCategories);

    let postsToPrint = [];;
    qAllPosts.forEach(qAllPost => {
        console.log('qAllPost');
        console.log(qAllPost.categories.nodes);
        let qAllPostCategories = qAllPost.categories.nodes.map(qAllPostcategory => {
            return qAllPostcategory.id;
        })
        console.log('qAllPostCategories')
        console.log(qAllPostCategories)
        // isInCategory(sourceCategories, qAllPost)
        console.log(isInCategory(sourceCategories, qAllPostCategories));
        if (isInCategory(sourceCategories, qAllPostCategories)){
            console.log(qAllPosts);
            if (dPostID != qAllPost.id){
                postsToPrint.push(qAllPost);    
            }
        }
    })

    console.log('postsToPrint');
    console.log(postsToPrint);

    return(
        <Container>
            <Row>
                <Col classes="col-xs-2 col-sm-1">
                    {
                        
                    }
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