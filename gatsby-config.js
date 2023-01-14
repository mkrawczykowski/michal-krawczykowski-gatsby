module.exports = {
  siteMetadata: {
    title: `michal-krawczykowski-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "https://mk.stronyireszta.pl/graphql"
      }
    }, 
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
};