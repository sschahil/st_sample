import { makeExecutableSchema } from 'graphql-tools'
import {userType, userResolvers} from './resources/users'
import { gurdwaraType, gurdwaraResolvers } from './resources/gurdwaras'
import merge from 'lodash.merge'
import { graphqlExpress } from 'apollo-server-express'

const baseSchema = `
    schema {
        query: Query
        mutation: Mutation
    }
`

export const schema = makeExecutableSchema({
    typeDefs: [
        baseSchema,
        userType,
        gurdwaraType,
    ],
    resolvers: merge (
        {}, 
        userResolvers,
        gurdwaraResolvers,
    )
})

export const graphQLRouter = graphqlExpress((req) => ({
    schema, 
    context: {
        req,
        user: req.user,
        gurdwara: req.gurdwara
    }
}))