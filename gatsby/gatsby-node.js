const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })

  const result = await graphql(`
    {
      allWordpressPage(
        filter: {
          slug: { in: ["home", "portfolio", "contact", "privacy"] }
        }
      ) {
        edges {
          node {
            id
            title
            content
            slug
            template
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage } = result.data

  allWordpressPage.edges.forEach(edge => {
    let template = path.resolve(`./src/templates/page.js`)
    switch (edge.node.template) {
      case "services.php":
        template = path.resolve(`./src/templates/services.js`)
        break
      case "portfolio.php":
        template = path.resolve(`./src/templates/portfolio.js`)
        break
      case "contact.php":
        template = path.resolve(`./src/templates/contact.js`)
        break
    }
    createPage({
      path: `/${edge.node.slug}`,
      component: slash(template),
      context: edge.node,
    })
  })
}
