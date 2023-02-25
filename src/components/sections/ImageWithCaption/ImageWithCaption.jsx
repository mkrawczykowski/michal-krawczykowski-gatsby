import React from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';


const ImageWithCaption = ({data}) => {
    const featuredImage = data.wpPost.featuredImage ? getImage(data.wpPost.featuredImage.node.localFile) : null;
    return(
        <figure>

        </figure>    
    )
}

export default ImageWithCaption;

export const postQuery = graphql`
    fragment ImagewithcaptionFragmentPost on WpPost_Flexiblesections_Sections_Imagewithcaption{
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
                        outputPixelDensities: "[1,2]"
                    )
                }
            }
        }
    }
`

export const pageQuery = graphql`
    fragment ImagewithcaptionFragmentPage on WpPage_Flexiblesections_Sections_Imagewithcaption{
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
                        outputPixelDensities: "[1,2]"
                    )
                }
            }
        }
    }
`

export const postQuerySection = graphql`
    fragment ImagewithcaptionFragmentPostSection on WpPost_Flexiblesections_Sections_Section_Sections_Imagewithcaption{
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
                        outputPixelDensities: "[1,2]"
                    )
                }
            }
        }
    }
`

export const pageQuerySection = graphql`
    fragment ImagewithcaptionFragmentPageSection on WpPage_Flexiblesections_Sections_Section_Sections_Imagewithcaption{
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
                        outputPixelDensities: "[1,2]"
                    )
                }
            }
        }
    }
`