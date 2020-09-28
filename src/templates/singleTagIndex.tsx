import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { MarkdownRemark } from '../types'
import SEO from '../components/SEO'

interface SingleTagProps {
    pageContext: {
        posts: Array<MarkdownRemark>
        tagName: string
    }
}

const SingleTagTemplate: React.FunctionComponent<SingleTagProps> = ({ pageContext }) => {
    const { posts, tagName } = pageContext
    return (
        <Layout>
            <SEO title={`${tagName}`} />
            <h1>
                Posts related to: {`${tagName}`}
            </h1>
            <div>
                <ul>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default SingleTagTemplate