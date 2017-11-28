import '../src/api/resources/gurdwaras/gurdwara.model'
import mongoose from 'mongoose'
import config from '~/config'
import { graphql } from 'graphql'
import { schema } from '../src/api/graphQLRouter'

mongoose.Promise = global.Promise

export const removeModel = (modelName) => {
    const model = mongoose.model(modelName)
    return new Promise((resolve, reject) => {
        if(!model) {
            return resolve()
        }
        model.remove((err) => {
            if(err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

export const dropDb = () => {
    return mongoose.connect(config.db.url, {
        useMongoClient: true
    })
        .then(() => Promise.all(mongoose.modelNames().map(removeModel)))
}

export const runQuery = async (query, variables, gurdwara) => {
    return graphql(schema, query, {}, {gurdwara}, variables)
}