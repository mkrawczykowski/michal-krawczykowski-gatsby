import React from 'react';

const ThePost = ({post}) => {
    console.log(post.PostACFData.postExcerpt);
    return(
        <>  
            <h2>{post.title}</h2>
            <p>{post.PostACFData.postExcerpt}</p>     
        </>
    )
}

export default ThePost;