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
    comment_id: String
    user: User
    content: String
  }
  type Comment {
    article_id: String
    user: User
    content: String
    childrens: [Reply]
  }

  type Comments {
    comments: [Comment]
  }



  type Query {
    getArticles(page: Int!, limit: Int!): Articles
    getDetailArticle(articleId: ID!): Article
    getCommentsOfArticle(articleId: ID!): Comments
  }

  schema {
    query: Query
  }
`;
export default TypeDefs