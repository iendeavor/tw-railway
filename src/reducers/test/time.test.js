import reducer from '../time'
import TYPES from '../../constants/actionTypes'
import KEYS from '../../constants/keys'

const format = time => time.toISOString().substring(11, 16) // '1970-01-01'

describe('Test time reducer', () => {
    describe('Test arrival', () => {
        it('should have empty string as initial arrival time', () => {
            expect(reducer()).toHaveProperty(KEYS.arrivalTime, '')
        })

        it('should update with given timestring', () => {
            const PREV_STATE = Object.freeze({
                [KEYS.arrivalTime]: '',
            })

            const ACTION = {
                type: TYPES.setArrivalTime,
                payload: {
                    [KEYS.arrivalTime]: '11:59',
                }
            }

            expect(reducer(PREV_STATE, ACTION)).toHaveProperty(
                    KEYS.arrivalTime, '11:59')
        })

        it('should update with empty string', () => {
            const PREV_STATE = Object.freeze({
                [KEYS.arrivalTime]: '11:59',
            })

            const ACTION = {
                type: TYPES.setArrivalTime,
                payload: {
                    [KEYS.arrivalTime]: '',
                }
            }

            expect(reducer(PREV_STATE, ACTION)).toHaveProperty(
                    KEYS.arrivalTime, '')
        })
    })

    describe('Test departure', () => {
        it('should have empty string as initial departure time', () => {
            expect(reducer()).toHaveProperty(KEYS.departureTime, '')
        })

        it('should update with given timestring', () => {
            const PREV_STATE = Object.freeze({
                [KEYS.departureTime]: '',
            })

            const ACTION = {
                type: TYPES.setDepartureTime,
                payload: {
                    [KEYS.departureTime]: '11:59',
                }
            }

            expect(reducer(PREV_STATE, ACTION)).toHaveProperty(
                    KEYS.departureTime, '11:59')
        })

        it('should update with empty string', () => {
            const PREV_STATE = Object.freeze({
                [KEYS.departureTime]: '11:59',
            })

            const ACTION = {
                type: TYPES.setDepartureTime,
                payload: {
                    [KEYS.departureTime]: '',
                }
            }

            expect(reducer(PREV_STATE, ACTION)).toHaveProperty(
                    KEYS.departureTime, '')
        })
    })
})

