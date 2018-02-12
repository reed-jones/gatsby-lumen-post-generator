# Gatsby Lumen Post Generator

The Lumen post generator is a simple skeleton generator that will add a new post to your lumen blog and automate the directory structure creation and much of the front matter creation.

simply add

```js
"post": "node ./node_modules/gatsby-lumen-post-generator/NewPost.js",
```

to your package.json and create a new post. Add options using key="value" at the commandline. Only the title option is required. Available options are as follows:

* `title` (_required_)
* `category` (or just `cat`)
* `description` (or just `desc`)
* `tags` (comma seperated list)

Example:

```zsh
yarn post title="My First Generated Post" category="General Interest" desc="This is just a throw away blogpost I'm creating to demonstrate the post generator" tags=new,cool,wow,easy
```

this creates the directory: `src/pages/articles/2018-02-11---My-First-Generated-Post` containing an `index.md` file refilled with all the front matter you entered, with draft mode enabled so you don't accidentally add a new post to your website before its ready.
