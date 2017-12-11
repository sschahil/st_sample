import{ Gurdwara } from './gurdwara.model'

const getGurdwara = (_, {id}, {gurdwara}) => {
    return Gurdwara.findById(id).exec()
}

const allGurdwaras = () => {
    return Gurdwara.find({}).exec()
}

const newGurdwara = (_, {input}) => {
    console.log(input.gurdwara)
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