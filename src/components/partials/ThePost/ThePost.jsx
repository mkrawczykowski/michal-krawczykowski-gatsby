import React from 'react';
import {Link} from 'gatsby';
import * as styles from './ThePost.module.scss';
import {betterDate} from '../../../inc/helpers';

const ThePost = ({post}) => {
    console.log('post');
    console.log(post);
    const date = post.date;
    const title = post.title;
    const excerpt = post.PostACFData.postExcerpt;
    return(
        <div className={styles.post}>
            <p className={styles.post__date}>{betterDate(date)}</p>
            <Link className={styles.post__titleLink} to={post.slug}><h2>{title}</h2></Link>
            <p className={styles.post__excerpt}>{excerpt}</p>    
        </div>
    )
}

export default ThePost;