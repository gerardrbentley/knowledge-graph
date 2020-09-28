import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Template from '../src/templates/blogPost'
import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'
import { mockMarkdownRemark } from '../__mocks__/graphql-responses'

const renderer = new ShallowRenderer()

const context = {
    next: mockMarkdownRemark,
    prev: mockMarkdownRemark
}
const data = {
    markdownRemark: mockMarkdownRemark
}

describe("Blog Page", () => {
    it("renders successfully", () => {
        renderer.render(<Template data={data} pageContext={context}></Template>)
        const tree = renderer.getRenderOutput()
        expect(tree).toMatchSnapshot()
    }),
        it("renders components", () => {
            renderer.render(<Template data={data} pageContext={context}></Template>)
            const tree = renderer.getRenderOutput()
            expect(tree.type).toBe(Layout)
            expect(tree.props.children).toContainEqual(<SEO title={`${mockMarkdownRemark.frontmatter.title}`} description={`${mockMarkdownRemark.frontmatter.excerpt || mockMarkdownRemark.excerpt}`} />)
            expect(tree.props.children).toContainEqual(<h1 style={{"textAlign": "center"}}>{`${mockMarkdownRemark.frontmatter.title}`}</h1>)
        })

})