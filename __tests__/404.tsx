import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import NotFoundPage from '../src/pages/404'
import Layout from '../src/components/Layout'
import SEO from '../src/components/SEO'

const renderer = new ShallowRenderer()

describe("404 Page", () => {
    it("renders successfully", () => {
        renderer.render(<NotFoundPage></NotFoundPage>)
        const tree = renderer.getRenderOutput()
        expect(tree).toMatchSnapshot()
    }),
    it("renders components", () => {
        renderer.render(<NotFoundPage></NotFoundPage>)
        const tree = renderer.getRenderOutput()
        expect(tree.type).toBe(Layout)
        expect(tree.props.children).toContainEqual(<SEO title="404: Not Found" />)
        expect(tree.props.children).toContainEqual(<h1>Not Found</h1>)
    })

})