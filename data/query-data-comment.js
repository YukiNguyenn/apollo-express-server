import _ from 'lodash'
import commentsData from './comments'

let length = commentsData.length

function fakeDelay (cb) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cb())
    }, 10)
  })
}

export default {
  getCommentsOfArticle(articleId) {
    return fakeDelay(() => {
      const comments =  _.filter(commentsData, (comment) => {
        return comment.article_id === articleId
      })
      // _.isEmpty(comment) ? [] : comment
      return {
        comments
      }
    })
  },

  addComment(articleId, username, avatar, content) {
    length += 1
    const comment = {
      id: length,
      article_id: articleId,
      user: {
        username,
        avatar
      },
      content,
      childrens: [],
      created_at: new Date()
    }
    return fakeDelay(() => {
      commentsData.push(comment)
      return comment
    })
  },

  addReply(commentId, username, avatar, content) {
    length += 1
    const reply = {
      id: length,
      comment_id: commentId,
      user: {
        username,
        avatar
      },
      content,
      created_at: new Date()
    }
    return fakeDelay(() => {
      const comment =  _.find(commentsData, (comment) => {
        return comment.id == commentId
      })
      if(!comment) return
      comment.childrens.push(reply)
      return reply
    })
  }
}
