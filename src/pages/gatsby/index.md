---
path: "/gatsby"
date: "2020-09-23"
title: "Gatsby"
tags: ['React','Frontend','SSR','Web']
excerpt: "Notes on Gatsby (React Framework)"
---

Gatsby ([Homepage](https://www.gatsbyjs.com/)) is a Site Generator for [React](/react). 

[Open source](/opensource) [Javascript](/javascript) framework for building web apps ([frontend](/frontend)). 

# Quickstart

[Source](https://www.gatsbyjs.com/docs/quick-start/)

Pre-requisite: npm

Install cli tool
``` shell
npm install -g gatsby-cli
```

Create Site
``` shell
gatsby new site-folder-name https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Run Dev server
``` shell
cd site-folder-name
gatsby develop --host 0.0.0.0 --port 8000
```

Visit Site Home: [http://localhost:8000]

Visit GraphQL query analyzer: [http://localhost:8000/___graphql]

# Data For Pages with GraphQL

Using [GraphQL](/graphql) isn't required with Gatsby, but it's built in and official plugins parse data into a GraphQL schema.

## Pages

Pages can use variables (via `pageContext`) in queries to narrow down / specify results.

This functionality extends to templates used with `createPage`.

Example (Blog Posts with Path):
- `gatsby-node.js` calls `createPage` with a `pathSlug` variable in the context:

``` js
const posts = data.allMarkdownRemark.edges

posts.forEach(({node}, index) => {
    const path = node.frontmatter.path
    createPage({
        path,
        component: blogPostTemplate,
        context: {
            pathSlug: path,
            prev: index === 0 ? posts[posts.length - 1].node.frontmatter : posts[index - 1].node.frontmatter,
            next: index === (posts.length - 1) ? posts[0].node.frontmatter : posts[index + 1].node.frontmatter
        }
    })
}
```

- `blogPostTemplate.js` can make a graphql query using `pathSlug` to specify which post we're building a page for

```js
export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`
```

## Components

Components / Layouts cannot use variables in queries.

Must use Gatsby's `StaticQuery`, where static can be read as 'no variables' or 'constant.'

**[Hook](/react) method `useStaticQuery`**
Example (Layout fetching site information):
- `Layout.js` contains a Functional compenent, in which it calls `useStaticQuery` with a [graphql](/graphql) query:

```js
const Layout: React.FunctionComponent<LayoutProps> = ({ next, prev, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        year
                    }
                }
            }
        `
    )
    console.log({data})
    const { title, description, author, year } = data.site.siteMetadata
    #... use `title`, `description`, `author`, `year` in jsx 
```

*Reminder: Access Grapphql schema at `localhost:8000/___graphql` (With your site's IP address if WSL2 or remote)* 

# Testing

Using Jest is pretty well supported with Gatsby and [React](/react);

## Setup

1. Install testing dependencies for react / jest

```shell
npm install --save-dev jest babel-jest react-test-renderer babel-preset-gatsby identity-obj-proxy
```

2. `jest.config.js` file

```js
module.exports = {
    transform: {
        "^.+\\.[jt]sx?$": `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"]
}
```

3. `jest-preprocess.js`

```js
const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").createTransformer(babelOptions)
```

4. `loadershim.js`

```js
global.___loader = {
  enqueue: jest.fn(),
}
```

## Resetting Test Cache

Jest and React make unit tests by rendering the code and saving a snapshot of that render to compare the tested code to.

Whenever you change code that changes the data on the page (changing html), run the following to update snapshots:

```shell
jest -u
# Or if test is in your `package.json` scripts
npm test -- -u
```

## Testing Components with `StaticQuery`

Components with `StaticQuery` / `useStaticQuery` receives data via context rather than props.

Create Components in a way that there is a 'Pure' version; Given the same inputs it will yield the same output.

The Unpure version will make the graphql `StaticQuery` and pass that data to the Pure component

Example (Layout that requires site metadata):

1. Components `src/components/layout.tsx`

*NOTE:* export both the Pure component and the Main version

```tsx
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MarkdownRemark } from '../types'

export interface LayoutProps {
    next?: MarkdownRemark
    prev?: MarkdownRemark
}

export interface PureLayoutProps {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
            }
        }
    }
    next?: MarkdownRemark
    prev?: MarkdownRemark
}

export const PureLayout: React.FunctionComponent<PureLayoutProps> = ({ data, next, prev, children }) => {
    const { title, description } = data.site.siteMetadata
    let header = (
        <div>
            <div>
                <div>
                    <Link to='/'>Index Page</Link>
                </div>
                <div>
                    {prev && <Link to={prev.frontmatter.path}>Prev ({prev.frontmatter.title})</Link>}
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <div>
                    <a href="/#">Other Link</a>
                </div>
                <div>
                    {next && <Link to={next.frontmatter.path}>Next ({next.frontmatter.title})</Link>}
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <header>
                {header}
            </header>
            <hr></hr>
            <main>
                {children}
            </main>
        </div>
    )
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )

    return <PureLayout {...props} data={data}></PureLayout>
}

export default Layout
```

2. Tests `__tests__/layout.ts`

```ts
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
        }
      }
    }
    const tree = renderer.create(<Layout data={ data }> </Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
```

# Typescript