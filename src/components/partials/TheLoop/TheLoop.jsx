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