<h1 align="center">
    <img alt="MMTrade" title="MMTrade" src="https://github.com/mmtrade/website/blob/master/.github/logo.svg" width="200"> </br>
</h1>

<h4 align="center">
  This repository contains the source code and content for the MMTrade public website. </br>
  It follows the <a href="https://jamstack.org">JAMstack architecture</a> by using Git as a single source of truth.
</h4>

<p align="center">
    <a target="_blank" href="https://circleci.com/gh/mmtrade/website"><img src="https://circleci.com/gh/mmtrade/website.svg?style=svg"></a> <a target="_blank" href="https://codecov.io/gh/mmtrade/website"><img src="https://codecov.io/gh/mmtrade/website/branch/master/graph/badge.svg"></a> <a target="_blank" href="https://www.codacy.com/app/mmtrade/website?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mmtrade/website&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/f7e27bb3a28a46a6b13453a02801c5c9"></a> <a target="_blank" href="https://codeclimate.com/github/mmtrade/website"><img src="https://img.shields.io/codeclimate/maintainability/mmtrade/website.svg"></a> <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fmmtrade%2Fwebsite?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmmtrade%2Fwebsite.svg?type=shield"/></a>
</p>

## Table of contents

+ [Quick Start](http://github.com/mmtrade/website#quick-start)
    + [Create a Gatsby site](http://github.com/mmtrade/website#create-a-gatsby-site)
    + [Start developing](http://github.com/mmtrade/website#start-developing)
    + [Access Locally](http://github.com/mmtrade/website#access-locally)
+ [Directory Structure](http://github.com/mmtrade/website#directory-structure)
+ [Prerequisites](http://github.com/mmtrade/website#prerequisites)

## Quick Start

#### Create a Gatsby site

Use the Gatsby CLI to create a new site.

```sh
gatsby new website https://github.com/mmtrade/website
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd website
gatsby develop
```

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Open the `website` directory in your code editor of choice and edit `src/templates/index-template.js`. Save your changes and the browser will update in real time!

#### Access Locally
```
$ git clone https://github.com/mmtrade/website.git
$ cd website
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Directory Structure

The following is a high level overview of relevant files and folders.


```
└── content
    ├── pages
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── components
    │   ├── Intro
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    ├── constants
    ├── templates
    └── utils

```

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)