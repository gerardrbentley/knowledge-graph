/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Brain Blog',
    description: 'Notes from random topics, connected; Loosely modeled after Zettelkasten / Roam',
    author: 'Gerard R. Bentley',
    year: new Date().getFullYear(),
    social: {
      twitter: 'garsbar35plus'
    }
  },
  plugins: [
    {
      resolve:`gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ],
}
