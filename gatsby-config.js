/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const siteUrl = "https://www.stevenwhitfield.live"

module.exports = {
  siteMetadata: {
    title: "Steven Whitfield",
    description:
      "Steven Whitfield is a software developer specializing in front-end web development.",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          

          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /\.global\.s(a|c)ss$/,
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
      },
    },
    "gatsby-plugin-smoothscroll",
  ],
};
