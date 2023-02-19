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

    let image;
    let imageComponent;
    let postImageClass = '';

    if (post.featuredImage){
        image = getImage(post.featuredImage.node.localFile);
        postImageClass = 'post_withImage';
        imageComponent = 
            <div className={styles.post__image}>
                <GatsbyImage className={styles.post__gatsbyImage} image={image} alt="no alt for now"></GatsbyImage>     
            </div>
    }
    
    return(
        <div className={[styles.post, styles[postImageClass]].join(' ')}>
            <p className={styles.post__date}>{betterDate(date)}</p>
            <Link className={styles.post__titleLink} to={post.slug}><h2>{title}</h2></Link>
            <p className={styles.post__excerpt}>{excerpt}</p>
            {
                imageComponent ? imageComponent : null
            }
            
        </div>
    )
}

export default ThePost;