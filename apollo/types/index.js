const TypeDefs = `
  type Media {
    url: String
  }

  type Source {
    author: String
  }

  type Article {
    id: String
    title: String
    content: String
    media: [Media]
    source: Source
  }

  type Articles {
    articles: [Article]
  }



  type User {
    username: String
    avatar: String
  }
  type Reply {
    id: ID
    comment_id: String
    user: User
    content: String
    created_at: String
  }
  type Comment {
    id: ID
    article_id: String
    user: User
    content: String
    childrens: [Reply]
    created_at: String
  }

  type Comments {
    comments: [Comment]
  }

  type Mutation {
    addComment(articleId: String!, username: String!, avatar: String!, content: String!): Comment
    addReply(commentId: String!, username: String!, avatar: String!, content: String!): Reply
  }

  type Subscription {
    commented(articleId: String!): Comment
    replied(commentId: String!): Reply
  }

  type Query {
    getArticles(page: Int!, limit: Int!): Articles
    getDetailArticle(articleId: ID!): Article
    getCommentsOfArticle(articleId: String!): Comments
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`
export default TypeDefs