import React from "react"

import { StaticQuery, graphql, Link } from 'gatsby'

const TitleAndDesc = ({ data, next, prev }) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            fontFamily: 'sans-serif',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '1rem',
                marginRight: '1rem',
                width: '30%'
            }}>
                <div style={{
                    marginBottom: '1rem'
                }}>
                    <Link to='/'>Index Page</Link>
                </div>
                <div>
                    {prev && <Link to={prev.frontmatter.path}>Prev ({prev.frontmatter.title})</Link>}
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '1rem',
                marginRight: '1rem',
                width: '40%'
            }}>
                <h2 style={{ marginBottom: '.3rem' }}>{title}</h2>
                <p style={{ opacity: 0.8 }}>{description}</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '1rem',
                marginRight: '1rem',
                width: '30%'
            }}>
                <div style={{
                    marginBottom: '1rem'
                }}>
                    <a href="/#">Other Link</a>
                </div>
                <div>
                    {next && <Link to={next.frontmatter.path}>Next ({next.frontmatter.title})</Link>}
                </div>
            </div>
        </div>
    )
}

const Header = ({ next, prev }) => {
    return (
        < StaticQuery
            query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }`
            }
            render={data => <TitleAndDesc data={data} next={next} prev={prev} />}
        />
    )
}

export default Header