import { makeExecutableSchema } from 'graphql-tools'
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
        gurdwaraType
    ],
    resolvers: merge (
        {},
        gurdwaraResolvers
    )
})

export const graphQLRouter = graphqlExpress((req) => ({
    schema, 
    context: {
        req,
        gurdwara: req.gurdwara
    }
}))