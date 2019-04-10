import { getTrainTypesMapping } from '../train_type'

describe('Test `getTrainTypesMapping`', () => {
    it('should be an object', () => {
        expect(getTrainTypesMapping()).toBeInstanceOf(Object)
    })

    it('should be empty object when source is empty', () => {
        expect(getTrainTypesMapping([])).toEqual({})
    })
})
