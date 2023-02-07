import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {isInCategory} from '../../../inc/helpers';

const TheLoop = ({categories, omitPostId}) => {
    const postCategories = useStaticQuery(graphql`
        query{
            allWpPost (limit: 1000){
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
        }
    `);

    const allPosts = postCategories.allWpPost.nodes;
    console.log('TheLoop')
    console.log('categories')
    console.log(categories)
    return(
        allPosts.map(allPost => {
            let postCategories = allPost.categories.nodes.map(node => node.id);
            console.log('--------------')
            console.log('allPost.title')
            console.log(allPost.title)
            console.log('postCategories')
            console.log(postCategories)
            console.log('allPost.id')
            console.log(allPost.id)
            console.log('omitPostId')
            console.log(omitPostId)
            console.log('isInCategory(categories, postCategories)')
            console.log(isInCategory(categories, postCategories))
            if (allPost.id != omitPostId && isInCategory(categories, postCategories)){
                console.log('allPost.id != omitPostId && isInCategory')
                return(
                    <h2>{allPost.title}</h2>
                )
            }
        })
    )
    


}

export default TheLoop;