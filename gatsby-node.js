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
}