import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import TheLoop from '../../partials/TheLoop/TheLoop';
import Card from '../../partials/Card/Card';

const ListOfPosts = ({data, postCategories, postID}) => {
    const query = useStaticQuery(graphql`
        query blogPosts{
            allWpCategory {
                nodes {
                    id
                }
            }
        }
    `)

    const dSourceOfPosts = data.sourceOfPosts;
    const dSourceCategories = data.sourceCategories;
    const dPostID = postID;
    let sourceCategories = [];
    const qAllCategories = query.allWpCategory.nodes.map(qAllCategory => {
        return qAllCategory.id;
    });

    switch (dSourceOfPosts){
        case 'Selected category(ies)':
            console.log('selected cats')
            if (dSourceCategories){
                sourceCategories = dSourceCategories.map(dSourceCategory => dSourceCategory.id);
            }
            console.log('sourceCategories')
            console.log(sourceCategories)
        break;
        case 'All categories':
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
            sourceCategories = postCategories?.map(dPostAllCategory => dPostAllCategory.id);
            console.log('sourceCategories')
            console.log(sourceCategories)
        break;
    }
    return(
        <Container>
            <Row>
                <Col classes="col-xs-2 col-sm-1">
                    {
                        <TheLoop categories={sourceCategories} omitPostId={postID}></TheLoop>
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