import { MarkdownRemark, SiteMetadataQuery } from "../src/types"

export const mockMarkdownRemark: MarkdownRemark = {
    frontmatter: {
        title: "Javascript",
        path: "/javascript",
        tags: [
            "Javascript",
            "Backend",
            "Frontend",
            "Web"
        ],
        date: new Date("2020-09-25"),
        excerpt: "Notes on Javascript"
    },
    excerpt: 'test',
    html: "<p>Javascript runs in the Browser and can control elements on an HTML page, along with fetching data from other website's API's.</p>\n<p>Makes it a popular tool for <a href=\"/frontend\">Frontend Dev</a> work.</p>\n<p>It can also run in a Backend server via <a href=\"/node\">Node</a></p>"
}

export const mockSiteMetadata: SiteMetadataQuery = {
    site: {
        siteMetadata: {
            title: "Brain Blog",
            description: "Notes from random topics, connected; Loosely modeled after Zettelkasten / Roam",
            author: "Gerard R. Bentley",
            year: 2020
        }
    }
}