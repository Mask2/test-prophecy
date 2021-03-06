/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: 'https://www.prophecy.health/',
    menuLinks: [
      {
        name: '企業背景',
        link: '/introduction',
      },
    ],
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/prophecy.health/',
      },
      {
        name: 'Facebook messenger',
        url: 'https://m.me/prophecy.health',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/prophecyhealth/',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/take2-health',
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCvZ29L5oDOpzIOJnGG-YZaA/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/articles/`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-remark-images`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        /*
        - basePath defaults to `/`
        */
        basePath: `/blog`,
        mdxOtherwiseConfigured: true,
        prismPreset: `prism-okaidia`,
        excerptLength: 200,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
