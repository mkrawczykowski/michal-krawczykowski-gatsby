import React from "react";
import {GatsbyImage} from 'gatsby-plugin-image';
import * as styles from './FeaturedImage.module.scss';

const FeaturedImage = ({image, alt}) => {
    return(
        <GatsbyImage className={styles.featuredImage} image={image} alt={alt} />
    )
}

export default FeaturedImage;