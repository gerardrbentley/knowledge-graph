const path = require('path')

const createTagPages = (createPage, posts) => {
    const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.tsx')
    const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.tsx')

    const postsByTag = {}

    posts.forEach(({node}) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if (!postsByTag[tag]) {
                    postsByTag[tag] = []
                }

                postsByTag[tag].push(node)
            })
        }
    })

    const tags = Object.keys(postsByTag)

    createPage({
        path: '/tags',
        component: allTagsIndexTemplate,
        context: {
            tags: tags.sort(),
            postsByTag: postsByTag
        }
    })

    tags.forEach(tagName => {
        const posts = postsByTag[tagName]
        const sanitizedTagName = tagName.replace(/\s+/g, '_').toLowerCase()
        createPage({
            path: `/tags/${sanitizedTagName}`,
            component: singleTagIndexTemplate,
            context: {
                posts,
                tagName
            }
        })
    })
}

exports.createPages = (({graphql, actions}) => {
    const {createPage} = actions

    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blogPost.tsx')
        const indexTemplate = path.resolve('src/templates/index.tsx')
        
        createPage({
            path: '/',
            component: indexTemplate,
        })

        resolve(
            graphql(
                `
                query{
                allMarkdownRemark(
                    sort: {order: ASC, fields: [frontmatter___date]}
                ) {
                    edges {
                        node {
                            frontmatter {
                                path
                                title
                                tags
                            }
                        }
                    }
                }
            }
                `
            ).then(result => {
                const posts = result.data.allMarkdownRemark.edges

                createTagPages(createPage, posts)

                posts.forEach(({node}, index) => {
                    const path = node.frontmatter.path
                    createPage({
                        path,
                        component: blogPostTemplate,
                        context: {
                            pathSlug: path,
                            prev: index === 0 ? posts[posts.length - 1].node : posts[index - 1].node,
                            next: index === (posts.length - 1) ? posts[0].node : posts[index + 1].node
                        }
                    })

                    resolve()
                })
            })
        )
    })
})