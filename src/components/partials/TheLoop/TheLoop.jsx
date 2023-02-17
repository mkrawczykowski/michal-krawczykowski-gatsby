import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ThePost from '../ThePost/ThePost';
import {isInCategory} from '../../../inc/helpers';

const TheLoop = ({categories, omitPostId}) => {
    const postCategories = useStaticQuery(graphql`
        query{
            allWpPost (limit: 1000){
                nodes {
                    id
                    slug
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
                    featuredImage {
                        node {
                          gatsbyImage(
                            width: 1920
                            placeholder: BLURRED
                            formats: AUTO
                            cropFocus: CENTER
                            outputPixelDensities: [1, 2]
                            fit: COVER
                            breakpoints: [576, 744, 992, 1200, 1400, 1800]
                            aspectRatio: 2
                          )
                          localFile {
                            childImageSharp {
                                gatsbyImageData(
                                  width: 1920
                                  placeholder: BLURRED
                                  formats: WEBP
                                  outputPixelDensities: [1, 2]
                                  breakpoints: [576, 744, 992, 1200, 1400, 1800]
                                  aspectRatio: 1.8
                                )
                              }
                          }
                        }
                      }
                }
            }
        }
    `);

    const allPosts = postCategories.allWpPost.nodes;
    return(
        allPosts.map(allPost => {
            let postCategories = allPost.categories.nodes.map(node => node.id);
            if (allPost.id != omitPostId && isInCategory(categories, postCategories)){
                return(
                    <ThePost post={allPost}></ThePost>
                )
            }
        })
    )
    


}

export default TheLoop;