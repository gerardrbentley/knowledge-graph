import React from 'react'
import { render } from '@testing-library/react'
import { PureSEO as SEO } from '../src/components/SEO'
import { mockSiteMetadata } from '../__mocks__/graphql-responses'
import { Helmet } from 'react-helmet'


describe("SEO", () => {
    it("Sets page info with only site metadata and title", () => {
        const tree = render(<SEO title="test title" sitedata={mockSiteMetadata}> </SEO>)
        expect(Helmet.peek().title).toEqual(`test title | ${mockSiteMetadata.site.siteMetadata.title}`)
        expect(Helmet.peek().metaTags[0]).toEqual({name: 'description', content: mockSiteMetadata.site.siteMetadata.description})
    }),
    it("Sets alternative description", () => {
        const description = "test description"
        const title = "test title"
        const tree = render(<SEO title={title} description={description} sitedata={mockSiteMetadata}> </SEO>)
        expect(Helmet.peek().title).toEqual(`${title} | ${mockSiteMetadata.site.siteMetadata.title}`)
        expect(Helmet.peek().metaTags[0]).toEqual({name: 'description', content: description})
        })
})