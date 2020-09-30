import React from 'react'
import { render } from '@testing-library/react'
import TagLink from '../src/components/TagLink'


describe("Tag Link", () => {
    it("renders successfully", () => {
        const tree = render(<TagLink tagName={'tagName'} number={3}></TagLink>)
        expect(tree).toMatchSnapshot()
    })

    it("renders with number", () => {
        const tree = render(<TagLink tagName={'tagName'} number={3}></TagLink>)
        expect(tree.baseElement.textContent).toEqual('tagName (3)')

    })
    it("renders without number", () => {
        const tree2 = render(<TagLink tagName={'tagName'}></TagLink>)
        expect(tree2.baseElement.textContent).toEqual('tagName')
    })
})