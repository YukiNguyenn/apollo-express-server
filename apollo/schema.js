import { makeExecutableSchema } from 'graphql-tools'
import { PubSub, withFilter } from 'graphql-subscriptions'

import TypeDefs from './types'

// import resolvers
import Query from './resolvers/queries.js'
import { Mutation, Subscription } from './resolvers'


import { COMMENT } from '../utilities/constant'
import Comments from '../data/query-data-comment'

const typeDefs = TypeDefs

const resolvers = {
  Query,
  Mutation,
  Subscription
}

const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default jsSchema
