import React from 'react';
import {graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Container, Col, Row} from '../../structure/Grid/Grid';


const ImageWithCaption = ({data}) => {
    const dataFeaturedImage = data.image;
    const featuredImage = dataFeaturedImage ? getImage(data.image.localFile) : null;
    
    return(
        <Container>
            <Row>
                <Col classes="col-xs-2 col-sm-2 col-md-8 col-xxl-2"></Col>
                <Col classes="col-xs-2 col-sm-2 col-md-8 col-xxl-8">
                    <figure>
                        <GatsbyImage image={featuredImage} />
                        {
                            data.imageCaption ? <figcaption>{data.imageCaption}</figcaption> : null
                        }
                    </figure>      
                </Col>
                <Col classes="col-xs-2 col-sm-2 col-md-8 col-xxl-2"></Col>
            </Row>
        </Container>
    )
}

export default ImageWithCaption;

export const postQuery = graphql`
    fragment ImageWithCaptionFragmentPost on WpPost_Flexiblesections_Sections_Imagewithcaption{
        fieldGroupName
        imageCaption
        image {
            altText
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 1100
                        placeholder: BLURRED
                        formats: WEBP
                        aspectRatio: 1.8
                        sizes: ""
                        breakpoints: [576, 744, 992, 1200, 1400, 1800]
                        layout: CONSTRAINED
                        outputPixelDensities: [1,2]
                    )
                }
            }
        }
    }
`

export const pageQuery = graphql`
    fragment ImageWithCaptionFragmentPage on WpPage_Flexiblesections_Sections_Imagewithcaption{
        fieldGroupName
        imageCaption
        image {
            altText
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 900
                        placeholder: BLURRED
                        formats: WEBP
                        aspectRatio: 1.8
                        sizes: ""
                        breakpoints: [576, 744, 992, 1200, 1400, 1800]
                        layout: CONSTRAINED
                        outputPixelDensities: [1,2]
                    )
                }
            }
        }
    }
`

export const postQuerySection = graphql`
    fragment ImageWithCaptionFragmentPostSection on WpPost_Flexiblesections_Sections_Section_Sections_Imagewithcaption{
        fieldGroupName
        imageCaption
        image {
            altText
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 900
                        placeholder: BLURRED
                        formats: WEBP
                        aspectRatio: 1.8
                        sizes: ""
                        breakpoints: [576, 744, 992, 1200, 1400, 1800]
                        layout: CONSTRAINED
                        outputPixelDensities: [1,2]
                    )
                }
            }
        }
    }
`

export const pageQuerySection = graphql`
    fragment ImageWithCaptionFragmentPageSection on WpPage_Flexiblesections_Sections_Section_Sections_Imagewithcaption{
        fieldGroupName
        imageCaption
        image {
            altText
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 900
                        placeholder: BLURRED
                        formats: WEBP
                        aspectRatio: 1.8
                        sizes: ""
                        breakpoints: [576, 744, 992, 1200, 1400, 1800]
                        layout: CONSTRAINED
                        outputPixelDensities: [1,2]
                    )
                }
            }
        }
    }
`