import React from 'react';
import {graphql} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import Card from '../../partials/Card/Card';

const ListOfPosts = ({data}) => {
    const sectionsHeading = data.sectionsHeading;
    const numberOfPosts = data.numberOfPosts;
    const buttonLabel = data.buttonLabel;
    const sourceOfPosts = data.sourceOfPosts;
    const fieldGroupName = data.fieldGroupName;
    const sourceCategories = data.sourceCategories;
    const showLoadMoreButton = data.showLoadMoreButton;

    return(
        <Container>
            <Row>
                <Col classes="col-xs-2 col-sm-1">
                    {sectionsHeading ? <h2>sectionsHeading</h2> : null}

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