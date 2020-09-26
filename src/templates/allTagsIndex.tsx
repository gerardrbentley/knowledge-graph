import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import { MarkdownRemark } from '../types';
import SEO from '../components/SEO';

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
            <SEO title="Brain Topic Tags"/>
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