import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MarkdownRemark, SiteMetadataQuery } from '../types'
import "./Layout.css"

export interface LayoutProps {
    next?: MarkdownRemark
    prev?: MarkdownRemark
}

export interface PureLayoutProps {
    data: SiteMetadataQuery
    next?: MarkdownRemark
    prev?: MarkdownRemark
}

export const PureLayout: React.FunctionComponent<PureLayoutProps> = ({ data, next, prev, children }) => {
    let toggleDarkMode: ((event: React.ChangeEvent<HTMLInputElement>) => void) = (event) => console.log('default', event)
    let defaultDark: boolean = false;
    if (typeof window !== 'undefined') {
        defaultDark = (localStorage.getItem('use-dark-mode') === 'true') || false
        const [darkMode, setDarkMode] = React.useState(localStorage.getItem('use-dark-mode') || 'false')

        React.useEffect(() => {
            localStorage.setItem('use-dark-mode', darkMode);
        }, [darkMode])

        toggleDarkMode = (event) => {
            const newVal = event.target.checked
            if (newVal) {
                event.target.classList.add('use-dark-mode')
                document.querySelector('.dark-mode-label')?.classList.add('use-dark-mode')
            } else {
                event.target.classList.remove('use-dark-mode')
                document.querySelector('.dark-mode-label')?.classList.remove('use-dark-mode')
            }
            setDarkMode(String(newVal))
        }
    }

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
                    <Link data-testid="index-link" to='/'>Index Page</Link>
                </div>
                <div>
                    {prev && <Link data-testid="prev-link" to={prev.frontmatter.path}>Prev ({prev.frontmatter.title})</Link>}
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
                <h1>{title}</h1>
                <p style={{ opacity: 0.9 }}>{description}</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '1rem',
                marginRight: '1rem',
                width: '20%'
            }}>
                <div style={{
                    marginBottom: '1rem'
                }}>
                    <a data-testid="other-link" href="/#">Other Link</a>
                </div>
                <div>
                    {next && <Link data-testid="next-link" to={next.frontmatter.path}>Next ({next.frontmatter.title})</Link>}
                </div>
            </div>
            <div style={{
                width: '10%',
            }}>
                <label data-testid="dark-mode-switch" className="dark-mode-label switch" htmlFor="dark-mode"><span className="slider round"></span></label>
            </div>
        </div>
    )

    let footer = (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
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
        <div>
            <input data-testid="dark-mode-input" id="dark-mode" className="dark-mode-checkbox visually-hidden" type="checkbox" onChange={toggleDarkMode} defaultChecked={defaultDark} />

            <div className="layout theme-container" data-testid="theme">
                <header className="header">
                    {header}
                </header>
                <main className="main">
                    {children}
                </main>
                <footer className="footer">
                    {footer}
                </footer>
            </div>
        </div>
    )
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
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

    return <PureLayout {...props} data={data}></PureLayout>
}

export default Layout