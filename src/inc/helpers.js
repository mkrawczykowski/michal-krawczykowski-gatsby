    
/**
 * isInCategory checks if post is in a certain category or group of categories. Can use IDs or categories' names
 * @param  {Number || String || Array} categoriesIds [post's category or categories]
 * @param  {Number || String || Array} postIds [a list of ategories to check the post against]
 * @return {Boolean} [true if the post is in category/categories from postIds]
 */
    
export const isInCategory = (categoriesIds, postIds) => {
    let result = false;

    if (Array.isArray(categoriesIds)){
        if (Array.isArray(postIds)){      
            categoriesIds.forEach(categoryId => {
                if (postIds.includes(categoryId)){
                    result = true;
                }
            })
        }
        if (!Array.isArray(postIds)){
            categoriesIds.forEach(categoryId => {
                if (categoryId == postIds){
                    result = true;
                }
            })
        }
    }



    if (!Array.isArray(categoriesIds)){
        if (Array.isArray(postIds)){
            postIds.forEach(postId => {
                if (postId == categoriesIds){
                    result = true;
                }
            })
        }
        if (!Array.isArray(postIds)){
            result = categoriesIds == postIds;
        }
    }

    return result;
}

/**
 * betterDate converts date to human-readable format
 * @param  {string} [date, e.g. 2020-05-12T23:50:21.817Z]
 * @return {string} [true if the post is in category/categories from postIds]
 */
export const betterDate = (date) => {
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const betterDate = new Date(date).toLocaleDateString('pl-PL', dateOptions).replaceAll('-', '.');

    return betterDate;
}