---
path: "/gatsby"
date: "2020-09-23"
title: "Gatsby"
tags: ['React','Frontend','SSR','Web']
excerpt: "Notes on Gatsby (React Static Site Generator)"
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

# Typescript