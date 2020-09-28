import React from 'react'
import renderer from 'react-test-renderer'

import { PureLayout as Layout } from '../src/components/Layout'
import { mockMarkdownRemark, mockSiteMetadata } from '../__mocks__/graphql-responses'


describe("Layout", () => {
  it("renders correctly without next or prev", () => {
    const tree = renderer.create(<Layout data={mockSiteMetadata}> </Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  }),
    it("renders correctly with next and prev", () => {
      const tree = renderer.create(<Layout data={mockSiteMetadata} next={mockMarkdownRemark} prev={mockMarkdownRemark}> </Layout>).toJSON()
      expect(tree).toMatchSnapshot()
    })
})