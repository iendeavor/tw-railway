import reducer from '../filter'
import ACTION_TYPES from '../../constants/actionTypes'
import KEYS from '../../constants/keys'

const format = date => date.toISOString().substring(0, 10) // '1970-01-01'
const TODAY              = new Date()
const TOMORROW           = new Date(+TODAY + 86400 * 1000)
const FORMATTED_TODAY    = format(TODAY)
const FORMATTED_TOMORROW = format(TOMORROW)

let prevState

describe('Test filter reducer', () => {
    beforeEach(() => {
        prevState = Object.freeze({
            [KEYS.selectedValues]: new Set([KEYS.nursingRoom]),
        })
    })

    it('should add filter', () => {
        const action = {
            type: ACTION_TYPES.addFilter,
            payload: {
                value: KEYS.wheelChair,
            }
        }

        expect(reducer(prevState, action)).toHaveProperty(
                KEYS.selectedValues, new Set([KEYS.nursingRoom, KEYS.wheelChair]))
    })

    it('should not add filter if it already existed', () => {
        const action = {
            type: ACTION_TYPES.addFilter,
            payload: {
                value: KEYS.nursingRoom,
            }
        }

        expect(reducer(prevState, action)).toHaveProperty(
                KEYS.selectedValues, new Set([KEYS.nursingRoom]))
    })

    it('should remove filter', () => {
        const action = {
            type: ACTION_TYPES.removeFilter,
            payload: {
                value: KEYS.nursingRoom,
            }
        }

        expect(reducer(prevState, action)).toHaveProperty(
                KEYS.selectedValues, new Set())
    })

    it('should not throw if removing filter is not exited', () => {
        const action = {
            type: ACTION_TYPES.removeFilter,
            payload: {
                value: KEYS.wheelChair,
            }
        }

        expect(reducer(prevState, action)).toHaveProperty(
                KEYS.selectedValues, new Set([KEYS.nursingRoom]))
    })
})

