import { Gurdwara } from './gurdwara.model'
import merge from 'lodash.merge'

const getGurdwara = (_, {id}, {gurdwara}) => {
    return Gurdwara.findById(id).exec()
}

const allGurdwaras = () => {
    return Gurdwara.find({}).exec()
}

const newGurdwara = (_, {input}) => {
    return Gurdwara.create(input)
}

const updateGurdwara = (_, {input}) => {
    const {id, ...update} = input

    return Gurdwara.findByIdAndUpdate(id, update, {new: true}).exec()
}

export const gurdwaraResolvers = {
    Query: {
        allGurdwaras,
        Gurdwara: getGurdwara
    },

    Mutation: {
        newGurdwara,
        updateGurdwara
    }
}