export interface MarkdownRemarkFrontmatter {
    title: string
    path: string
    date: Date
    tags: string[]
    excerpt: string
}

export interface MarkdownRemark {
    frontmatter: MarkdownRemarkFrontmatter
    excerpt: string
    html: string
}

export interface MarkdownRemarkEdge {
    next: MarkdownRemark
    node: MarkdownRemark
    previous: MarkdownRemark
}

export interface SiteMetadataQuery {
    site: {
        siteMetadata: {
            title: string
            description: string
            author: string
            year: number
        }
    }
}