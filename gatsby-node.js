exports.createPages = async ({ actions, graphql }) =>{
    const result  = await graphql(`
        query{
            allWpPage {
                nodes {
                    id
                    slug
                }
            }
        }
    `)

    const pages = result.data.allWpPage.nodes;

    pages.forEach(page => {
        // https://stackoverflow.com/questions/59868720/how-can-i-set-the-index-page-of-my-gatsby-site-to-be-one-of-the-dynamically-gene
        // with 'uri' it would be '/start/'
        if (page.slug==='start') {
            page.slug = '/'
        }
        
        actions.createPage(
            {
                path: page.slug,
                component: require.resolve('./src/templates/page.jsx'),
                context: {
                    id: page.id,
                }
            }
        )
    });

    // actions.createPage(
    //     {
    //         path: '/',
    //         component: require.resolve('./src/templates/page.jsx'),
    //         context: {
    //             id: page.id,
    //         }
    //     }
    // )
}