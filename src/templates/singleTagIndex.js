import React from 'react'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'

const SingleTagTemplate = ({ data, pageContext }) => {
    console.log(pageContext)
    const { posts, tagName } = pageContext
    return (
        <div>
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'sans-serif'
            }}>
                <div>
                    Posts about {`${tagName}`}
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
        </div>
    )
}

export default SingleTagTemplate