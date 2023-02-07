import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {isInCategory, getPosts} from '../../../inc/helpers';
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
    let dPostAllCategories = postCategories.map(dPostAllCategory => dPostAllCategory.id);
    const dPostID = postID;
    let sourceCategories = [];
    const qAllPosts = allPostsQuery.allWpPost.nodes;
    const qAllCategories = allPostsQuery.allWpCategory.nodes.map(qAllCategory => {
        return qAllCategory.id;
    });

    console.log('getPosts')
    console.log(getPosts)

    switch (dSourceOfPosts){
        case 'Selected category(ies)':
            console.log('selected cats')
            sourceCategories = dSourceCategories.map(dSourceCategory => dSourceCategory.id);
        break;
        case 'All categories':
            console.log('all cats')
            console.log('qAllCategories')
            console.log(qAllCategories)
            console.log('dPostAllCategories')
            console.log(dPostAllCategories)
            console.log('dPostID')
            console.log(dPostID)
            qAllCategories.forEach(qAllCategory => {
                console.log('----qAllCategory----');
                console.log(qAllCategory);
                sourceCategories.push(qAllCategory);
            });
            console.log('sourceCategories')
            console.log(sourceCategories)
        break;
        case 'Current post\'s category(ies)':
            console.log('current cats')
            if (dPostAllCategories){
                qAllCategories.forEach(qAllCategory => {
                    console.log('----qAllCategory----');
                    console.log(qAllCategory);
                    if (isInCategory(dPostAllCategories, qAllCategory)){
                        console.log('isInCategory(dPostAllCategories, qAllCategory)')
                        console.log(isInCategory(dPostAllCategories, qAllCategory))
                        sourceCategories.push(qAllCategory);
                    }   
                });
            }
            if (!dPostAllCategories){
                sourceCategories = 0;
            }
        break;
    }

    let postsToPrint = [];
    qAllPosts.forEach(qAllPost => {
        let qAllPostCategories = qAllPost.categories.nodes.map(qAllPostcategory => {
            return qAllPostcategory.id;
        })
        if (qAllPost.id != postID){
        if (isInCategory(sourceCategories, qAllPostCategories)){
            postsToPrint.push(qAllPost);
        }
        }
    })
    console.log('postsToPrint')
    console.log(postsToPrint)
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