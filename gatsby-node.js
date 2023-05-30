const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const PostTemplate = path.resolve(`src/templates/project-details.js`)
    const result = await graphql(`
        query Projects {
            allMdx {
                nodes {
                    frontmatter {
                    Slug5
                    }
                }
            }
        }
    `)

    result.data.allMdx.nodes.forEach(node => {
        console.log("slug", node)
        createPage({
            path: '/projects/' + node.frontmatter.Slug,
            component: PostTemplate,
            context: {
                Slug: node.frontmatter.Slug
            },
        })
    });
}