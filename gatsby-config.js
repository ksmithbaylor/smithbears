module.exports = {
  siteMetadata: {
    title: 'the smith family',
    author: 'Kevin Smith',
    description: 'Updates on our family',
    siteUrl: 'https://www.smithbears.com'
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-next`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'katiegeorgiapeach.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret:
            'H8tf47or6fXpqemyPLkfAWfVYSj45CzldqEEAm75a2vkGN8nq7NROJpcEiVm6JqH',
          wpcom_app_clientId: '57106',
          wpcom_user: 'katieasmith@outlook.com',
          wpcom_pass: 'Oboeplayer7?'
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};
