import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Col} from '../../structure/Grid/Grid';
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
                          localFile {
                            childImageSharp {
                                gatsbyImageData(
                                  placeholder: BLURRED
                                  quality: 10,
                                  width: 310
                                  formats: WEBP
                                  outputPixelDensities: [1, 2]
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
                    <Col classes="col-xs-2 col-sm-2 col-md-4 col-xl-12 col-2xl-12">
                        <ThePost post={allPost}></ThePost>
                    </Col>
                )
            }
        })
    )
}

export default TheLoop;