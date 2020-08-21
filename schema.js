import { makeExecutableSchema } from 'graphql-tools'
import { PubSub, withFilter } from 'graphql-subscriptions'

import TypeDefs from './apollo/types'

// import resolvers
import Mutation from './apollo/resolvers/mutations.js'
import Query from './apollo/resolvers/queries.js'
import Subscription from './apollo/resolvers/subscriptions.js'

const pubsub = new PubSub()

// const typeDefs = [`
//   type Tag {
//     id: Int
//     label: String
//     type: String
//   }

//   type TagsPage {
//     tags: [Tag]
//     hasMore: Boolean
//   }

//   type Query {
//     hello: String
//     ping(message: String!): String
//     tags(type: String!): [Tag]
//     tagsPage(page: Int!, size: Int!): TagsPage
//     randomTag: Tag
//     lastTag: Tag
//   }

//   type Mutation {
//     addTag(type: String!, label: String!): Tag
//   }

//   type Subscription {
//     tagAdded(type: String!): Tag
//   }

//   schema {
//     query: Query
//     mutation: Mutation
//     subscription: Subscription
//   }
// `];

const typeDefs = TypeDefs

const resolvers = {
  Query,
  // Subscription: {
    // tagAdded: {
    //   subscribe: withFilter(
    //     () => pubsub.asyncIterator(TAGS_CHANGED_TOPIC),
    //     (payload, variables) => payload.tagAdded.type === variables.type,
    //   ),
    // }
  // },
}

const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default jsSchema
