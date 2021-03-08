/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
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
      path: `/articles/${node.id}`,
      component: articleTemplate,
      context: {
        // additional data can be passed via context
        id: node.id,
      },
    });
  });
};
