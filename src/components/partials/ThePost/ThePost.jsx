import React from 'react';
import {Link} from 'gatsby';
import * as styles from './ThePost.module.scss';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {betterDate} from '../../../inc/helpers';

const ThePost = ({post}) => {
    console.log('post');
    console.log(post);
    const date = post.date;
    const title = post.title;
    const excerpt = post.PostACFData.postExcerpt;
    const image = getImage(post.featuredImage.node.localFile)
    return(
        <div className={styles.post}>
            <GatsbyImage image={image} alt="no alt for now"></GatsbyImage>
            <p className={styles.post__date}>{betterDate(date)}</p>
            <Link className={styles.post__titleLink} to={post.slug}><h2>{title}</h2></Link>
            <p className={styles.post__excerpt}>{excerpt}</p>    
        </div>
    )
}

export default ThePost;