import TYPES from '../../constants/actionTypes'
import KEYS from '../../constants/keys'

import reducer from '../sort'

let prevState

describe('Test sort reducer', () => {
    beforeEach(() => {
        prevState = Object.freeze({
            [KEYS.sortBy]: KEYS.arrival,
        })
    })

    it('should init with `ARRIVAL`', () => {
        expect(reducer()).toHaveProperty(KEYS.sortBy, KEYS.arrival)
    })

    it('should update with specified key', () => {
        const action = {
            type: TYPES.setSort,
            payload: {
                [KEYS.sortBy]: KEYS.departure
            }
        }

        expect(reducer(prevState, action))
            .toHaveProperty(KEYS.sortBy, KEYS.departure)
    })
})

