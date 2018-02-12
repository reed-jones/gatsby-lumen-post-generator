const fs = require('fs')
const path = require('path')

const articlesDir = path.join(__dirname, `../src/pages/articles/`)

const getParam = arg =>
  (process.argv.find(param => param.split('=')[0] === arg) || '').split('=')[1]

const niceNow = (short = true, now = new Date()) =>
  short ? now.toISOString().split('T')[0] : now.toISOString()

const getDirectory = () =>
  articlesDir + niceNow() + '---' + title.replace(/ /g, '-')

// parse out custom blog options
const title = getParam('title').trim()
const category = getParam('cat') || getParam('category') || ''
const description = getParam('desc') || getParam('description') || ''
const tags = getParam('tags')
  ? ('\n  - "' + (getParam('tags') || '').replace(/,/g, '","') + '"')
      .split(',')
      .join('\n  - ')
  : ''

// The promise land
const makeBlogDir = () => {
  const dir = getDirectory()
  const promise = new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        resolve({ message: 'Directory Created' })
      }
      reject('Directory Already Exists With That Blog Title')
    } catch (err) {
      reject(err)
    }
  })
  return promise
}

const readBlogTemplate = blog => {
  if (blog.message) console.log(blog.message)

  const promise = new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '/emptyBlogTemplate.md'),
      'utf8',
      (err, data) => {
        if (err) reject(err)
        const template = data
          .replace(/Blog-Title/g, title)
          .replace(/Blog-Category/g, category)
          .replace(/Blog-Description/g, description)
          .replace(/Blog-Tags/g, tags)
          .replace(/Blog-Path/g, title.toLowerCase().replace(/ /g, '-'))
          .replace(/Blog-Date/g, niceNow(false))
        resolve({
          message: 'Template Generated\n' + template,
          data: template,
        })
      }
    )
  })
  return promise
}

const writeBlogTemplate = blog => {
  if (blog.message) console.log(blog.message)

  const promise = new Promise((resolve, reject) => {
    fs.writeFile(path.join(getDirectory(), '/index.md'), blog.data, err => {
      if (err) reject(err)
      resolve('The file was saved!')
    })
  })
  return promise
}

makeBlogDir()
  .then(readBlogTemplate)
  .then(writeBlogTemplate)
  .then(console.log)
  .catch(console.log)