import _ from 'lodash'
import articlesData from './articles'

function fakeDelay (cb) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cb())
    }, 10)
  })
}

export default {
  getArticles(page, limit) {
    return fakeDelay(() => {
      const start = page * limit
      const end = start + limit
      return {
        articles: articlesData.slice(start, end)
      }
    })
  },

  getDetailArticle(articleId) {
    return fakeDelay(() => {
      const article =  _.find(articlesData, (article) => {
        return article.id === articleId
      })
      return article
    })
  }
}
