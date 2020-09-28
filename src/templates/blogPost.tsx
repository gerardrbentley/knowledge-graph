import * as React from 'react'
import { graphql } from 'gatsby'

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
    const html = markdownRemark.html
    const description = markdownRemark.frontmatter.excerpt || markdownRemark.excerpt
    return (
        <Layout next={next} prev={prev}>
            <SEO title={title}
                description={description} />
            <h1 style={{
                textAlign: 'center'
            }}>{title}</h1>
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
            }
        }
    }
`

export default Template