import Comments from '../../data/query-data-comment.js'
import { PubSub, withFilter } from 'graphql-subscriptions'
import { COMMENT } from '../../utilities/constant'

const pubsub = new PubSub()

// define mutation
export const Mutation = {
  addComment: async (root, { articleId, username, avatar, content }, context) => {
    const newComment = await Comments.addComment(articleId, username, avatar, content)
    pubsub.publish(COMMENT.ADD, { commented: newComment, articleId })
    return newComment;
  },
  addReply: async (root, { commentId, username, avatar, content }, context) => {
    const newReply = await Comments.addReply(commentId, username, avatar, content)
    await pubsub.publish(COMMENT.REPLY, { replied: newReply, commentId })
    return newReply
  }
}

//define subscription
export const Subscription = {
  commented: {
    subscribe: withFilter(
      () => pubsub.asyncIterator(COMMENT.ADD),
      (payload, variables) => {
        if (!payload) return false
        return payload.articleId === variables.articleId
      }
    )
  },
  replied: {
    subscribe: withFilter(
      () => pubsub.asyncIterator(COMMENT.REPLY),
      (payload, variables) => {
        if (!payload) return false
        return payload.commentId === variables.commentId
      }
    )
  }
}
