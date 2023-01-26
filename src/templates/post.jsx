import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';

export const query = graphql`
    query($id: String!){
        wpPost(id: {eq: $id}){
            title
            PageTitle{
                pageDescription
                pageTitle
            }
        }
    }
`

const PostTemplate = ({data}) => {

    const post = {};
    post.title = data.wpPost.title;
    post.titleACF = data.wpPost.PageTitle.pageTitle;
    post.descriptionACF = data.wpPost.PageTitle.pageDescription;

    return(
        <Layout page={post}>
        </Layout>
    )
}

export default PostTemplate;