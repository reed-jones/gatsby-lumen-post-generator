# Gatsby Lumen Post Generator

The [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) post generator is a simple skeleton generator that will add a new post to your lumen blog and automate the directory structure creation and much of the frontmatter creation.

simply run `yarn lumen-post` and pass it the desired options. alternatively, if your an npm fan add `"lumen-post": "lumen-post",` to your package.json scripts.

Options are added using key="value" at the commandline. Only the title option is required. Available options are as follows:

* `title` (_required_)
* `category` (or just `cat`)
* `description` (or just `desc`)
* `tags` (comma seperated list)

Example:

```zsh
yarn lumen-post title="My First Generated Post" category="General Interest" desc="This is just a throw away blogpost I'm creating to demonstrate the post generator" tags=new,cool,wow,easy
```

this creates the directory: `src/pages/articles/2018-02-11---My-First-Generated-Post` containing an `index.md` file refilled with all the front matter you entered, with draft mode enabled so you don't accidentally add a new post to your website before its ready.

your fresh `index.md` should look something like this:

```yml
---
title: "My First Generated Post"
date: "2018-02-12T00:08:01.358Z"
layout: post
draft: true
path: "/posts/my-first-generated-post/"
category: ""
tags:
  - "new"
  - "cool"
  - "wow"
  - "easy"
description: "This is just a throw away blogpost I'm creating to demonstrate the post generator"
---
```
