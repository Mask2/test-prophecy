exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/whats-new/campaign/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
