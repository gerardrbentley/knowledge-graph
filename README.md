## :pineapple: Journey / Tools

1. Started with https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```shell
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

2. Followed Gatsby Markdown Blog guide from [egghead.io](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby)

3. Simple generation script for new entries

4. Typescript

5. Testing and Code Coverage with Jest

6. Darkmode CSS + localstorage

7. CI/CD

## 🚀 Run Local

1.  **Clone Repo**

    Download relevant code:

    ```shell
    git clone knowledge git@gitlab.com:gerardrbentley/knowledge-graph.git
    ``` 

1.  **Start developing.**

    Navigate into the new directory and start it up.

    ```shell
    cd knowledge/
    gatsby develop --host 0.0.0.0 --port 8000
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `knowledge` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## :star: Adding Knowledge

tl;dr `python gen_page.py "New Topic"` --> `src/pages/new_topic/index.md`

Pages on the blog are created from Markdown Text (.md) files (One Source's [Cheatsheet](https://www.markdownguide.org/cheat-sheet/))

They are organized with one-directory each, containing only a file called `index.md`

Each `index.md` File contains the following frontmatter at the beginning of the file (with relevant substitutions for $ Variables):

```md
---
path: "/$URL_NAME"
date: "2020-09-25"
title: "$DISPLAYED_TITLE"
tags: ['$TAG', '$TAG2']
excerpt: "$SUBTITLE_TEXT"
---
```

## :bread: Linking Knowledge

Simple Markdown links for now: 

```
# In a Markdown file
[Other Topic](/other_topic)
```
Represents a link with "Other Topic" as clickable text that leads to the page `0.0.0.0:8000/other_topic`

## Testing

Calling the following will run Unit Tests and a Code Coverage report for all source files

```shell
npm run test
```

Calling the following will run End to End (e2e) Tests with Cypress

```shell
docker-compose run e2e-electron
# or
docker-compose run e2e-chrome
# or
docker-compose run e2e-firefox
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this Gatsby project.

    .
    ├── src
    |   ├── pages
    |   ├── templates
    |   └── components
    |
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── .prettierrc
    ├── package.json
    ├── package-lock.json
    ├── node_modules
    ├── .gitignore
    ├── LICENSE
    └── README.md


1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

    Contains **`/src/pages`**: Directories that correspond to pages in the blog, with each directory containing a file called `index.md` with its content and frontmatter

    **`/src/templates`**: Template code for different types of pages, exported then called in `gatsby-node.js` to actually render pages.

    **`/src/components`**: Reusable compenents used in multiple Templates

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. Keeps Metadata like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: Keeps `createPage` functions, This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages). Things here are automatically installed with `npm install`, and updated when installing new packages.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`LICENSE`**: MIT Permissive license ([See Reference](https://choosealicense.com/licenses/mit/)), Gatsby Starter 0BSD

1. **`README.md`**: This File. Contains useful information about the codebase

**FOR LATER**

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
