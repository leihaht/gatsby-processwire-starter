module.exports = {
  siteMetadata: {
    title: 'SPA testing site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-processwire',
      options: {
        apiURL: 'http://localhost/kiwigw/en/api',
        contentTypes: ['tag', 'discussion'],
        headers: {}
      },
    },
  ],
}
