import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { MarkdownRemark } from '../types';
import SEO from '../components/SEO';

interface AllTagsProps {
    pageContext: {
        posts: {
            [key: string]: Array<MarkdownRemark>
        }
        tags: Array<string>
    }
}

const AllTagsTemplate: FunctionComponent<AllTagsProps> = ({ pageContext }) => {
    console.log(pageContext)
    const { tags, posts } = pageContext
    return (
        <Layout>
            <SEO title="Topic Tags" />
            <div>
                <ul>
                    {tags.map((tagName, index) => {
                        return (
                            <li key={index}>
                                <Link className="tag-link" to={`${tagName.replace(/\s+/g, '_').toLowerCase()}`}>
                                    {tagName}
                                </Link>

                                <span style={{ paddingLeft: '2rem' }}>{posts[tagName].length}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default AllTagsTemplate