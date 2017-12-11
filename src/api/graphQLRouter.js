import { makeExecutableSchema } from 'graphql-tools'
import {userType, userResolvers} from './resources/users'
import { gurdwaraType, gurdwaraResolvers } from './resources/gurdwaras'
import { geocodeType, geocodeResolvers } from './resources/geocoding'
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
        geocodeType
    ],
    resolvers: merge (
        {}, 
        userResolvers,
        gurdwaraResolvers,
        geocodeResolvers
    )
})

export const graphQLRouter = graphqlExpress((req) => ({
    schema, 
    context: {
        req,
        user: req.user
    }
}))