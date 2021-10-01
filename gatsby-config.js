/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /\.global\.s(a|c)ss$/,
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
      },
    },
  ],
};
