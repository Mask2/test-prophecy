/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  createPage({
    path: '/no-data/',
    component: require.resolve('./src/templates/no-data.js'),
    context: {
      title: 'We Don’t Need No Stinkin’ GraphQL!',
      content: '<p>This is page content.</p><p>No GraphQL required!</p>',
    },
  });
  const products = require('./src/data/products.json');
  products.forEach((product) => {
    createPage({
      path: `/product/${product.slug}/`,
      component: require.resolve('./src/templates/product.js'),
      context: {
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
      },
    });
  });

  const results = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  results.data.allProductsJson.edges.forEach((edge) => {
    const product = edge.node;
    createPage({
      path: `/gql/${product.slug}/`,
      component: require.resolve('./src/templates/product-graphql.js'),
      context: {
        slug: product.slug,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const articleTemplate = require.resolve(`./src/templates/articleTemplate.js`);
  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.id}`,
      component: articleTemplate,
      context: {
        // additional data can be passed via context
        id: node.id,
      },
    });
  });
};
