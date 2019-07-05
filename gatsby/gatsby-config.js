module.exports = {
  siteMetadata: {
    title: `Maik Kuntze Full Stack Developer`,
    description: `Info and Portfolio Website of Maik Kuntze Full Stack Developer`,
    author: `@emke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maik Kuntze Full Stack Developer`,
        short_name: `Maik Kuntze`,
        start_url: `/home`,
        background_color: `#663399`,
        theme_color: `#663399`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost:8888/wp",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
          "**/services",
          "**/portfolio",
          "**/clients",
          "**/logo",
          "**/favicon",
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PC7TTW5",
        includeInDevelopment: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-client-side-redirect`,
  ],
}
