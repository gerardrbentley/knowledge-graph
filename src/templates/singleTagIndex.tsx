import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import { MarkdownRemark } from '../types'

interface SingleTagProps {
    pageContext: {
        posts: Array<MarkdownRemark>
        tagName: string
    }
}

const SingleTagTemplate: React.FunctionComponent<SingleTagProps> = ({ pageContext }) => {
    console.log(pageContext)
    const { posts, tagName } = pageContext
    return (
        <Layout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'sans-serif'
            }}>
                <div>
                    Posts related to: {`${tagName}`}
                </div>
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
            </div>
        </Layout>
    )
}

export default SingleTagTemplate