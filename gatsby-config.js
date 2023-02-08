module.exports = {
  siteMetadata: {
    title: `michal-krawczykowski-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        debug: {
          graphql: {
            showQueryOnError: true,
          }
        },
        schema: {
          timeout: 100000,
        },
        "url": "https://mk.stronyireszta.pl/graphql"
      }
    }, 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    }
  ]
};