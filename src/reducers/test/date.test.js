import reducer from '../date'
import TYPES from '../../constants/actionTypes'
import KEYS from '../../constants/keys'

const format = date => date.toISOString().substring(0, 10) // '1970-01-01'
const TODAY              = new Date()
const TOMORROW           = new Date(+TODAY + 86400 * 1000)
const FORMATTED_TODAY    = format(TODAY)
const FORMATTED_TOMORROW = format(TOMORROW)

describe('Test date reducer', () => {
    it('should have today as initial date', () => {
        expect(reducer()).toHaveProperty(KEYS.departureDate, new Date(FORMATTED_TODAY))
    })

    it('should update with given date', () => {
        const PREV_STATE = Object.freeze({
            [KEYS.departureDate]: TODAY,
        })

        const ACTION = {
            type: TYPES.setDate,
            payload: {
                [KEYS.departureDate]: TOMORROW,
            }
        }

        expect(reducer(PREV_STATE, ACTION)).toHaveProperty(
                KEYS.departureDate, new Date(FORMATTED_TOMORROW))
    })

    it('should update with given string of date', () => {
        const PREV_STATE = Object.freeze({
            [KEYS.departureDate]: TODAY,
        })

        const ACTION = {
            type: TYPES.setDate,
            payload: {
                [KEYS.departureDate]: FORMATTED_TOMORROW,
            }
        }

        expect(reducer(PREV_STATE, ACTION)).toHaveProperty(
                KEYS.departureDate, new Date(FORMATTED_TOMORROW))
    })
})

