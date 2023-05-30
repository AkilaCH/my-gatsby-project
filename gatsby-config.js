/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'Gatsby Project',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2023 Akila Hapuarachchi',
    contact: 'akilahapuarachchi218@gmail.com'
  },
  plugins: [
    
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, 
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    "gatsby-plugin-mdx",
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
  ],
}
