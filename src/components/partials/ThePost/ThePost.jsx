import React from 'react';
import Card from '../Card/Card';

const ThePost = ({post}) => {
    console.log(post.PostACFData.postExcerpt);
    const title = post.title;
    const excerpt = post.PostACFData.postExcerpt;
    return(
        <Card>
            <h2>{title}</h2>
            <p>{excerpt}</p>
        </Card>    
    )
}

export default ThePost;