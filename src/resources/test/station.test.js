import { getStations, getStationsOfCountry, getCountries } from '../stations'

describe('Test `getStations`', () => {
    it('should be an object', () => {
        expect(getStations()).toBeInstanceOf(Object)
    })

    it('should have an array as children', () => {
        const aCountry = getCountries()[0].id
        expect(getStations()[aCountry]).toBeInstanceOf(Array)
    })
})

describe('Test `getCountries`', () => {
    it('should be an array', () => {
        expect(getCountries()).toBeInstanceOf(Array)
    })
})

describe('Test `getStationsOfCountry`', () => {
    it('should be an array', () => {
        expect(getStationsOfCountry()).toBeInstanceOf(Array)
    })
})

