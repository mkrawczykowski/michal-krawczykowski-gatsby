import React from 'react';
import * as styles from './ThePost.module.scss';
import {betterDate} from '../../../inc/helpers';

const ThePost = ({post}) => {
    console.log(post.PostACFData.postExcerpt);
    const date = post.date;
    const title = post.title;
    const excerpt = post.PostACFData.postExcerpt;
    return(
        <div className={styles.post}>
            <p className={styles.post__date}>{betterDate(date)}</p>
            <h2 className={styles.post__title}>{title}</h2>
            <p className={styles.post__excerpt}>{excerpt}</p>    
        </div>
    )
}

export default ThePost;