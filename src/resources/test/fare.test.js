import { getFare } from '../fare'

describe('Test `getFare`', () => {
    it('should return a promise', () => {
        expect(getFare(1234, 1234)).toBeInstanceOf(Promise)
    })
})

