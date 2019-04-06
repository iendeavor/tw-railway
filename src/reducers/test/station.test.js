import ACTION_TYPES from '../../constants/actionTypes'
import KEYS from '../../constants/keys'

import reducer from '../station'

let prevState
const TAIPEI_ID = 1008
const KAUHSIUNG_ID = 1238
const RANDOM_ID = Math.floor(Math.random() * 1000 + 1000)

describe('Test station reducer', () => {
    beforeEach(() => {
        prevState = Object.freeze({
            [KEYS.fromStation]: TAIPEI_ID,
            [KEYS.toStation]: KAUHSIUNG_ID,
        })
    })

    it('should init with `ARRIVAL`', () => {
        const nextState = reducer()
        expect(nextState).toHaveProperty(KEYS.fromStation, TAIPEI_ID)
        expect(nextState).toHaveProperty(KEYS.toStation, KAUHSIUNG_ID)
    })

    it('should update from station with specified key', () => {
        const action = {
            type: ACTION_TYPES.setFromStation,
            payload: {
                [KEYS.fromStation]: RANDOM_ID,
            }
        }

        const nextState = reducer(prevState, action)
        expect(nextState).toHaveProperty(KEYS.fromStation, RANDOM_ID)
        expect(nextState).toHaveProperty(KEYS.toStation, KAUHSIUNG_ID)
    })

    it('should update to station with specified key', () => {
        const action = {
            type: ACTION_TYPES.setToStation,
            payload: {
                [KEYS.toStation]: RANDOM_ID,
            }
        }

        const nextState = reducer(prevState, action)
        expect(nextState).toHaveProperty(KEYS.fromStation, TAIPEI_ID)
        expect(nextState).toHaveProperty(KEYS.toStation, RANDOM_ID)
    })

    it('should swap from and to station', () => {
        const action = {
            type: ACTION_TYPES.swapStation,
        }

        const nextState = reducer(prevState, action)
        expect(nextState).toHaveProperty(KEYS.fromStation, KAUHSIUNG_ID)
        expect(nextState).toHaveProperty(KEYS.toStation, TAIPEI_ID)
    })
})

