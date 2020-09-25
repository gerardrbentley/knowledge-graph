import React from "react"
import { Link, graphql } from 'gatsby'

import Header from '../components/Header'

const Layout = ({data}) => {
  const {edges} = data.allMarkdownRemark
  return (
    <div>
      <Header />
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
      {edges.map(edge => {
        const {frontmatter} = edge.node
        return (
          <div key={frontmatter.path}
          style={{marginBottom: '1rem'}}
          >
            <Link to={frontmatter.path}>
            {frontmatter.title}
            </Link>
            </div>
        )
      })}
      </div>
    </div>
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


export default Layout