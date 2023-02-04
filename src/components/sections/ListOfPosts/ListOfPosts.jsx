import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import Card from '../../partials/Card/Card';

const ListOfPosts = ({data, postCategories}) => {
    const sectionsHeading = data.sectionsHeading;
    const numberOfPosts = data.numberOfPosts;
    const buttonLabel = data.buttonLabel;
    const showLoadMoreButton = data.showLoadMoreButton;
    const sourceOfPosts = data.sourceOfPosts;
    const postAllCategories = postCategories;
    let sourceCategories = [];
    const postsToShow = [];

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

    console.log(data)
    const allPosts = allPostsQuery.allWpPost.nodes;
    const allCategories = allPostsQuery.allWpCategory.nodes;
    let thisPostCategories = [];
    switch (sourceOfPosts){
        case 'Selected category(ies)':
            console.log('Selected category(ies)')
            sourceCategories = data.sourceCategories.map(sourceCategory => sourceCategories.push(sourceCategory.id));
        break;
        case 'All categories':
            console.log('All categories')
            sourceCategories = allCategories.map(allCategory => sourceCategories.push(allCategory.id));
        break;
        case 'Current post\'s category(ies)':
            console.log('current')
            if (postAllCategories){
                sourceCategories = postAllCategories.map(postAllCategory => {
                    let postAllCategoryId = postAllCategory.id;
                   return postAllCategoryId
                })
            }
            if (!postAllCategories){
                sourceCategories = 0;
            }
        break;
    }
    console.log('=========sourceCategories==========');
    console.log(sourceCategories);

    const isInCategory = (categoryIdWeSearch, postAllCategories) => {
        let result = false;
        // console.log('************ isInCategory ************')
        // console.log('categoryIdWeSearch')
        // console.log(categoryIdWeSearch)
        console.log('postAllCategories.length')
        console.log(postAllCategories.length)
        if (postAllCategories.length){
            // console.log('if postAllCategories.length')
            postAllCategories.forEach(postAllCategory => {
                console.log('---------')
                console.log('postAllCategory')
                console.log(postAllCategory)
                console.log('categoryIdWeSearch')
                console.log(categoryIdWeSearch)
                if (postAllCategory === categoryIdWeSearch){
                    result = true
                    console.log('true');
                }
                
            })
            return result;
        }
        

        return false;
    }

    return(
        <Container>
            <Row>
                <Col classes="col-xs-2 col-sm-1">
                    {/* <pre>{JSON.stringify(sourceCategories, null, 2)}</pre> */}
                    {sectionsHeading ? <h2>{sectionsHeading}</h2> : null}
                    {   
                        // allPosts.map(post => {
                        //     thisPostCategories = post.categories.nodes;
                        //     // console.log('thisPostCategories');
                        //     // console.log(thisPostCategories);
                        //     // let result = thisPostCategories.map(thisPostCategory => {
                        //     //     if (sourceCategories){
                        //     //         console.log('thisPostCategory.id');
                        //     //         console.log(thisPostCategory.id);
                        //     //         if (isInCategory(thisPostCategory.id, sourceCategories)){
                        //     //             return true
                        //     //         }
                        //     //     }
                        //     // })
                        // })
                        
                        allPosts.forEach(post => {
                            console.log('-----post-----')
                            console.log('post')
                            console.log(post)
                            thisPostCategories = post.categories.nodes;
                            console.log('thisPostCategories')
                            console.log(thisPostCategories)
                            
                            thisPostCategories.forEach(thisPostCategory => {
                                console.log('isInCategory(thisPostCategory.id, sourceCategories)')
                            console.log(isInCategory(thisPostCategory.id, sourceCategories))
                                if (isInCategory(thisPostCategory.id, sourceCategories)){
                                    console.log('TAK!!!!');
                                    postsToShow.push(post);
                                }
                            })
                            
                        })
                    }
                    {
                        postsToShow.map(postToShow => {
                            return(
                               <h2>{postToShow.title}</h2> 
                            )
                            
                        })
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