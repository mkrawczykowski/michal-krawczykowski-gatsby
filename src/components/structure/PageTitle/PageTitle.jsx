import React from 'react';
import * as styles from './PageTitle.module.scss';
import {Container, Row, Col} from '../Grid/Grid';

const PageTitle = ({page}) => {
    return(
        <section className={styles.pageTitle}>
            <Container>
                <Row>
                    <Col classes="col-xs-2 col-sm-8 col-2xl-1"></Col>
                    <Col classes="col-xs-2 col-sm-8 col-2xl-10">
                        {page.titleACF ? <h1 className={styles.pageTitle__title}>{page.titleACF}</h1> : <h1 className={styles.pageTitle__title}>{page.title}</h1>}
                        {page.descriptionACF ? <h3 className={styles.pageTitle__description}>{page.descriptionACF}</h3> : null}
                    </Col>
                    <Col classes="col-xs-2 col-md-8 col-2xl-1"></Col>
                </Row>
            </Container>
        </section>
    )
}

export default PageTitle;