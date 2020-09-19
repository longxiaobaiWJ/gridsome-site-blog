// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const dataWrapper = require('./data.load.js')

const blogCallback = (item) => {
  const { id, description, url, files, updated_at } = item;
  const title = Object.keys(files).shift();
  return { id, description, url, updated_at, title }
}

const dataCompose = (name, addCollection, edges ) =>{
  const collection = addCollection(name)
    for (const item of edges) {
      collection.addNode(item)
    }
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const data = await dataWrapper('/users/longxiaobaiWJ/gists', blogCallback)
    dataCompose('Blog', addCollection, data)
  })

  api.loadSource(async ({ addCollection }) => {
    const data = await dataWrapper('/users/longxiaobaiWJ/following')
    dataCompose('Following', addCollection, data)
  })

  api.loadSource(async ({ addCollection }) => {
    const data = await dataWrapper('/users/longxiaobaiWJ/followers')
    dataCompose('Followers', addCollection, data)
  })
  
  api.loadSource(async ({ addCollection }) => {
    const data = await dataWrapper('/users/longxiaobaiWJ/repos')
    dataCompose('Repos', addCollection, data)
  })


  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
