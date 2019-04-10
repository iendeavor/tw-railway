import { getTimetable } from '../timetable'

describe('Test `getTimetable`', () => {
    it('should return a promise', () => {
        expect(getTimetable(1234, 1234)).toBeInstanceOf(Promise)
    })
})

