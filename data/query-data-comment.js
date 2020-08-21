import _ from 'lodash';
import commentsData from './comments.js';


function fakeDelay (cb) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cb())
    }, 1000)
  })
}

export default {
  getCommentsOfArticle(articleId) {
    return fakeDelay(() => {
      const comment =  _.filter(commentsData, (comment) => {
        return comment.article_id === articleId
      })
      return _.isEmpty(comment) ? [] : comment
    })
  },
  // addComment(articleId) {
  //   return fakeDelay(() => {
  //     const comment =  _.filter(commentsData, (comment) => {
  //       return comment.article_id === articleId
  //     })
  //     return comment
  //   })
  // }
};
