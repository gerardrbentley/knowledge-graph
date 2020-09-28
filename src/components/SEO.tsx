import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { SiteMetadataQuery } from '../types'


interface PureSEOProps {
    sitedata: SiteMetadataQuery
    description?: string
    lang?: string
    meta?: []
    title: string
}

interface SEOProps {
    description?: string
    lang?: string
    meta?: []
    title: string
}

export const PureSEO: React.FunctionComponent<PureSEOProps> = ({sitedata, description, lang, meta, title}) => {

    const metaDescription = description || sitedata.site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${sitedata.site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: sitedata.site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta || [])}
            />
    )
}

const SEO: React.FunctionComponent<SEOProps> = (props) => {
    const site = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    return <PureSEO {...props} sitedata={ site }/>
}

export default SEO