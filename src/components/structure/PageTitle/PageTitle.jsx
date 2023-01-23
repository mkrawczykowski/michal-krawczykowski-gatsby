import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import * as styles from './PageTitle.module.scss';
import {Container, Row, Col} from '../Grid/Grid';

const PageTitle = ({page}) => {
    return(
        <Container>
            <Row>
                <Col classes="col-1"></Col>
                <Col classes="col-10">
                    {page.titleACF ? <h1>{page.titleACF}</h1> : <h1>{page.title}</h1>}
                    {page.descriptionACF ? <h3>{page.descriptionACF}</h3> : null}
                </Col>
                <Col classes="col-1"></Col>
            </Row>
        </Container>
    )
}

export default PageTitle;