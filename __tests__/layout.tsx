import React from 'react'
import renderer from 'react-test-renderer'

import { PureLayout as Layout } from '../src/components/Layout'


describe("Layout", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "Brain Blog",
          description: "Notes from random topics, connected; Loosely modeled after Zettelkasten / Roam",
          author: "Gerard R. Bentley",
          year: new Date(2020)
        }
      }
    }
    const tree = renderer.create(<Layout data={ data }> </Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})