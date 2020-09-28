import * as React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

import type { MarkdownRemarkEdge } from '../types'
import SEO from "../components/SEO"

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: Array<MarkdownRemarkEdge>
    }
  }
}

const IndexPage: React.FunctionComponent<IndexProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Brain Index" />
      <div style={{
        margin: 'auto',
        textAlign: 'center',
        marginBottom: '1rem',
        fontFamily: 'sans-serif'
      }}>
        <Link to={'/tags'}>Browse by Tag</Link>
      </div>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif'
      }}>
        {edges.map((edge: MarkdownRemarkEdge) => {
          const {frontmatter} = edge.node
          return (
            <div key={frontmatter.path}
          style={{ marginBottom: '1rem' }}
        >
          <Link to={frontmatter.path}>
            {frontmatter.title}
          </Link>
        </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
 query HomepageQuery {
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
  ) {
    edges {
      node {
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
 }
`


export default IndexPage