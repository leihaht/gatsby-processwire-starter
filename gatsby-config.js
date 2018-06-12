module.exports = {
  siteMetadata: {
    title: 'SPA testing site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'queries',
        path: `${__dirname}/src/queries/`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        //headers: {
          //authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        //},
        url: 'http://localhost/kiwigw/en/api',
      },
    },
  ],
}
