import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import { MarkdownRemark } from '../types';

interface AllTagsProps {
    pageContext: {
        posts: {
            [key: string]: [MarkdownRemark]
        }
        tags: Array<string>
    }
}

const AllTagsTemplate: FunctionComponent<AllTagsProps> = ({ pageContext }) => {
    console.log(pageContext)
    const { tags, posts } = pageContext
    return (
        <Layout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'sans-serif'
            }}>
                <div>
                    <ul>
                        {tags.map((tagName, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`${tagName}`}>
                                        {tagName}
                                    </Link>

                                    <span style={{ paddingLeft: '2rem' }}>{posts[tagName].length}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            </Layout>
    )
}

export default AllTagsTemplate