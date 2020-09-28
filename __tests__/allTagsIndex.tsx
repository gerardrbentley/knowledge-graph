import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Template from '../src/templates/allTagsIndex'
import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'
import { mockMarkdownRemark } from '../__mocks__/graphql-responses'

const renderer = new ShallowRenderer()

const context = {
    posts: {
        Web: Array(mockMarkdownRemark, mockMarkdownRemark, mockMarkdownRemark),
        Frontend: Array(mockMarkdownRemark, mockMarkdownRemark, mockMarkdownRemark),
    
    },
    tags: Array('Web', 'Frontend')
}

describe("Single Tag Index Page", () => {
    it("renders successfully", () => {
        renderer.render(<Template pageContext={context}></Template>)
        const tree = renderer.getRenderOutput()
        expect(tree).toMatchSnapshot()
    }),
        it("renders components", () => {
            renderer.render(<Template pageContext={context}></Template>)
            const tree = renderer.getRenderOutput()
            expect(tree.type).toBe(Layout)
            expect(tree.props.children).toContainEqual(<SEO title="Topic Tags" />)
        })
})