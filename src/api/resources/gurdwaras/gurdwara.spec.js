import { Gurdwara } from './gurdwara.model'
import { runQuery, dropDb} from '../../../../test/helpers'
import { expect } from 'chai'

describe('Gurdwara Smoke Test', () => {
    let gurdwara

    beforeEach(async () => {
        await dropDb()
        gurdwara = await Gurdwara.create (
            {
                name: "TestGurdwara",
                addressLine1: "111 TestAddr Street",
                city: "TestCity",
                state: "TestState",
                zipcode: 12345,
                country: "TestCountry",
                phoneNumber: 1234567890,
                email: "test@email.com",
                latitude: "-125.00003",
                longitude: "12.0003"
            }
        )
    })
    
    afterEach(async () => {
        await dropDb()
    })

    it('should get Gurdwara', async() => {
        const result = await runQuery(`
        query Gurdwara($id: ID! ) {
                Gurdwara(id: $id) {
                    id 
                    name
                    addressLine1
                    city
                    state
                    zipcode
                    country
                    phoneNumber
                    email
                    latitude
                    longitude
                }
            }
            `, {id: gurdwara.id}, gurdwara)

        expect(result.errors).to.not.exist
        expect(result.data.Gurdwara).to.be.an('object')
        expect(result.data.Gurdwara.id).to.eql(gurdwara.id.toString())
    })

    it('should update Gurdwara', async () => {
        const newGurdwaraName = 'NewGurdwaraName'

        const result = await runQuery(`
        mutation updateGurdwara($input: UpdatedGurdwara!) {
            updateGurdwara(input: $input) {
                id 
                name
            }
        }
        `, {input: {id: gurdwara.id, name: newGurdwaraName}}, gurdwara)

        expect(result.errors).to.not.exist
        expect(result.data.updateGurdwara).to.be.an('object')
        expect(result.data.updateGurdwara.id).to.eql(gurdwara.id.toString())
        expect(result.data.updateGurdwara.name).to.eql(newGurdwaraName)
    })
})