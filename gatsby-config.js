/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Prophecy`,
    description: `Prophecy description`,
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
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/take2-health',
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCvZ29L5oDOpzIOJnGG-YZaA/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/prophecyhealth/',
      },
      {
        name: 'Whatsapp',
        url:
          'https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.prophecy.health%2F%25e4%25ba%2586%25e8%25a7%25a3%25e9%25bc%25bb%25e5%2592%25bd%25e7%2599%258c%25e6%2588%2590%25e5%259b%25a0%25e3%2580%2581%25e7%2597%2587%25e7%258b%2580%25e3%2580%2581%25e6%25aa%25a2%25e6%259f%25a5%25e5%258f%258a%25e9%25a0%2590%25e9%2598%25b2%25e6%2596%25b9%25e6%25b3%2595%25ef%25bc%2581%2F',
      },
      {
        name: 'Email',
        url:
          'mailto:?subject=Post%3A%20%E4%BA%86%E8%A7%A3%E9%BC%BB%E5%92%BD%E7%99%8C%E6%88%90%E5%9B%A0%E3%80%81%E7%97%87%E7%8B%80%E5%8F%8A%E6%AA%A2%E6%B8%AC%E6%96%B9%E6%B3%95%EF%BC%81&body=https%3A%2F%2Fwww.prophecy.health%2F%25e4%25ba%2586%25e8%25a7%25a3%25e9%25bc%25bb%25e5%2592%25bd%25e7%2599%258c%25e6%2588%2590%25e5%259b%25a0%25e3%2580%2581%25e7%2597%2587%25e7%258b%2580%25e3%2580%2581%25e6%25aa%25a2%25e6%259f%25a5%25e5%258f%258a%25e9%25a0%2590%25e9%2598%25b2%25e6%2596%25b9%25e6%25b3%2595%25ef%25bc%2581%2F',
      },
    ],
  },
  pathPrefix: '/test-prophecy',
  assetPrefix: `https://mask2.github.io`,
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
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/MdxLayout/MdxLayout'),
        },
      },
    },
    `gatsby-remark-images`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-material-ui`,
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
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          profile: 'speed',
          encode: false,
          tokenize: function (str) {
            return str.replace(/[\x00-\x7F]/g, '').split('');
          },
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMdx {
              nodes {
                id
                frontmatter {
                  date
                  title
                  author
                }
                slug
                rawBody
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'author'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            author: node.frontmatter.author,
            date: node.frontmatter.date,
            title: node.frontmatter.title,
            slug: node.slug,
            body: node.rawBody,
          })),
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`banner`],
        loginData: {
          identifier: 'ajaywu',
          password: 'Take2ajaywu',
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
