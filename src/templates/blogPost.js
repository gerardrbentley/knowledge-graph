import React from 'react'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'

const Template = ({ data, pageContext }) => {
    const { next, prev } = pageContext
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html

    return (
        <div>
            <Header next={next} prev={prev} />
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
        </div>
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