    
/**
 * isInCategory checks if post is in a certain category or group of categories. Can use IDs or categories' names
 * @param  {Number || String || Array} categoriesIds [post's category or categories]
 * @param  {Number || String || Array} postIds [a list of ategories to check the post against]
 * @return {Boolean} [true if the post is in category/categories from postIds]
 */
    
    const isInCategory = (categoriesIds, postIds) => {
        console.log('-----------------')
        console.log('categoriesIds')
        console.log(categoriesIds)
        console.log('postIds')
        console.log(postIds)
        let result = false;


        if (Array.isArray(categoriesIds)){
            console.log('categoriesIds is Array')
            if (Array.isArray(postIds)){
                console.log('postIds is Array')
                categoriesIds.forEach(categoryId => {
                    if (postIds.includes(categoryId)){
                        result = true;
                    }
                })
            }
            if (!Array.isArray(postIds)){
                console.log('postIds is NOT Array')
                categoriesIds.forEach(categoryId => {
                    if (categoryId == postIds){
                        result = true;
                    }
                })
            }
        }



        if (!Array.isArray(categoriesIds)){
            console.log('categoriesIds is NOT Array')
            if (Array.isArray(postIds)){
                console.log('postIds is Array')
                postIds.forEach(postId => {
                    if (postId == categoriesIds){
                        result = true;
                    }
                })
            }
            if (!Array.isArray(postIds)){
                console.log('postIds is NOT Array')
                result = categoriesIds == postIds;
            }
        }



        console.log(result)
        return result;
        
    }