import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MarkdownRemark } from '../types'

export interface LayoutProps {
    next?: MarkdownRemark
    prev?: MarkdownRemark

}

const Layout: React.FunctionComponent<LayoutProps> = ({ next, prev, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        year
                    }
                }
            }
        `
    )
    console.log({data})
    const { title, description, author, year } = data.site.siteMetadata
    let header = (
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
                textAlign: 'center',
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

    let footer = (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            fontFamily: 'sans-serif',
            marginBottom: '3rem'
        }}>
            <div>
                {prev && <Link to={prev.frontmatter.path}>Prev ({prev.frontmatter.title})</Link>}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '1rem',
                marginRight: '1rem',
                width: '40%',
                textAlign: 'center'
            }}>
                <span>
                    © {year}, Built by {author} Using <a href="https://www.gatsbyjs.org">GatsbyJS</a>
                </span>
            </div>
            <div>
                {next && <Link to={next.frontmatter.path}>Next ({next.frontmatter.title})</Link>}
            </div>
        </div>
    )

    return (
        <div
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '768px',
            }}
        >
            <header>
                {header}
            </header>
            <hr></hr>
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '85%',
            }}>
                {children}
            </main>
            <hr></hr>
            <footer>
                {footer}
            </footer>
        </div>
    )
}

export default Layout