import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

import { MarkdownRemark } from '../types'
import SEO from '../components/SEO'

export type PostProps = {
    data: {
        markdownRemark: MarkdownRemark
    }
    pageContext: {
        next: MarkdownRemark
        prev: MarkdownRemark
    }
}

const Template: React.FunctionComponent<PostProps> = ({ data, pageContext }) => {
    const { next, prev } = pageContext
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const tags = markdownRemark.frontmatter.tags
    const html = markdownRemark.html
    const description = markdownRemark.frontmatter.excerpt || markdownRemark.excerpt
    console.log(tags)
    return (
        <Layout next={next} prev={prev}>
            <SEO title={title}
                description={description} />
            <h1 style={{
                textAlign: 'center'
            }}>{title}</h1>
            <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'space-around',
                width: '75%',
                margin: '0 auto'
            }}>
                {tags.map((tagName, index) => {
                        return (
                            <div style={{flex: '0 1 auto', margin: '0 0.3rem'}} key={index}>
                                <Link className="tag-link" to={`/tags/${tagName.replace(/\s+/g, '_').toLowerCase()}`}>
                                    {tagName}
                                </Link>
                            </div>
                        )
                })}
            </div>
            <div className='blogpost'
                dangerouslySetInnerHTML={{ __html: html }} />

        </Layout>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug}}) {
            html
            frontmatter {
                title
                tags
            }
        }
    }
`

export default Template