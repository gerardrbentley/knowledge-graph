import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import { MarkdownRemark } from '../types'
import SEO from '../components/SEO'

type PostProps = {
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

    return (
        <Layout next={next} prev={prev}>
            <SEO title={markdownRemark.frontmatter.title}
            description={markdownRemark.frontmatter.excerpt || markdownRemark.excerpt} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'sans-serif'
            }}>
                <h1>{title}</h1>
                <div className='blogpost'
                    dangerouslySetInnerHTML={{ __html: html }} />
            </div>
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