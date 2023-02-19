import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import * as styles from './ListOfPosts.module.scss';
import TheLoop from '../../partials/TheLoop/TheLoop';

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
    
    const dSectionsHeading = data.sectionsHeading;
    const dSourceOfPosts = data.sourceOfPosts;
    const dSourceCategories = data.sourceCategories;
    let sourceCategories = [];
    const qAllCategories = query.allWpCategory.nodes.map(qAllCategory => {
        return qAllCategory.id;
    });

    switch (dSourceOfPosts){
        case 'Selected category(ies)':
            if (dSourceCategories){
                sourceCategories = dSourceCategories.map(dSourceCategory => dSourceCategory.id);
            }
        break;
        case 'All categories':
            qAllCategories.forEach(qAllCategory => {
                sourceCategories.push(qAllCategory);
            });
        break;
        case 'Current post\'s category(ies)':
            sourceCategories = postCategories?.map(dPostAllCategory => dPostAllCategory.id);
        break;
    }

    return(
        <Container>
            <Row>
                <Col classes="col-xs-2 col-sm-2 col-md-8">
                        {dSectionsHeading ? <h2 className={styles.listOfPosts__sectionTitle}>{dSectionsHeading}</h2> : null} 
                </Col>
            </Row>
            <Row>
                <TheLoop categories={sourceCategories} omitPostId={postID}></TheLoop>
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

export const pageQuerySection = graphql`
    fragment ListOfPostsFragmentPageSection on WpPage_Flexiblesections_Sections_Section_Sections_Listofposts{
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

export const postQuerySection = graphql`
    fragment ListOfPostsFragmentPostSection on WpPost_Flexiblesections_Sections_Section_Sections_Listofposts{
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