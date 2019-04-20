import {
  omitSecondForTimestamp,
  convertToTimestamp,
} from '../schedule'

describe('Test omitSecondForTimestamp', () => {
    it('should remove second', () => {
        expect(omitSecondForTimestamp(0)).toBe(0)
        expect(omitSecondForTimestamp(59)).toBe(0)
        expect(omitSecondForTimestamp(60)).toBe(1)
        expect(omitSecondForTimestamp(600)).toBe(10)
    })
});

describe('Test convertToTimestamp', () => {
    // here is no fraction testing support for ISO 8601

    it('should convert times (according to ISO 8601 time format) to timestamp', () => {
        const hh = '12'
        const mm = '30'
        const ss = '45'

        // basic format
        expect(convertToTimestamp(`${hh}`)).toBe(12 * 60 * 60)
        expect(convertToTimestamp(`${hh}${mm}`)).toBe(12 * 60 * 60 + 30 * 60)
        expect(convertToTimestamp(`${hh}${mm}${ss}`)).toBe(12 * 60 * 60 + 30 * 60 + 45)

        // extended format
        expect(convertToTimestamp(`${hh}:${mm}`)).toBe(12 * 60 * 60 + 30 * 60)
        expect(convertToTimestamp(`${hh}:${mm}:${ss}`)).toBe(12 * 60 * 60 + 30 * 60 + 45)
    })

    it('should convert beginning time to timestamp correctly', () => {
        const hh = '00'
        const mm = '00'
        const ss = '00'

        // basic format
        expect(convertToTimestamp(`${hh}`)).toBe(0)
        expect(convertToTimestamp(`${hh}${mm}`)).toBe(0)
        expect(convertToTimestamp(`${hh}${mm}${ss}`)).toBe(0)

        // extended format
        expect(convertToTimestamp(`${hh}:${mm}`)).toBe(0)
        expect(convertToTimestamp(`${hh}:${mm}:${ss}`)).toBe(0)
    })

    it('should convert ending time to timestamp correctly', () => {
        const hh = '23'
        const mm = '59'
        const ss = '59'

        // basic format
        expect(convertToTimestamp(`${hh}${mm}${ss}`)).toBe(24 * 60 * 60 - 1)

        // extended format
        expect(convertToTimestamp(`${hh}:${mm}:${ss}`)).toBe(24 * 60 * 60 - 1)
    })

    it('should convert midnight to timestamp correctly', () => {
        const hh = '24'
        const mm = '00'
        const ss = '00'

        // basic format
        expect(convertToTimestamp(`${hh}${mm}${ss}`)).toBe(24 * 60 * 60)

        // extended format
        expect(convertToTimestamp(`${hh}:${mm}:${ss}`)).toBe(24 * 60 * 60)
    })

    it('should convert support 60sec for denote an added leap second.', () => {
        let hh = '00'
        let mm = '00'
        const ss = '60'

        // basic format
        expect(convertToTimestamp(`${hh}${mm}${ss}`)).toBe(60)

        // extended format
        expect(convertToTimestamp(`${hh}:${mm}:${ss}`)).toBe(60)

        mm = '59'

        // basic format
        expect(convertToTimestamp(`${hh}${mm}${ss}`)).toBe(59 * 60 + 60)

        // extended format
        expect(convertToTimestamp(`${hh}:${mm}:${ss}`)).toBe(59 * 60 + 60)

        hh = '23'

        // basic format
        expect(convertToTimestamp(`${hh}${mm}${ss}`)).toBe(23 * 60 * 60 + 59 * 60 + 60)

        // extended format
        expect(convertToTimestamp(`${hh}:${mm}:${ss}`)).toBe(23 * 60 * 60 + 59 * 60 + 60)
    })

    it('should examine invalid range', () => {
        let hh, mm, ss

        hh = '25'
        expect(() => convertToTimestamp(`${hh}`)).toThrow()

        hh = '00'
        mm = '60'
        expect(() => convertToTimestamp(`${hh}${mm}`)).toThrow()

        hh = '00'
        mm = '00'
        ss = '61' // leap second
        expect(() => convertToTimestamp(`${hh}${mm}${ss}`)).toThrow()
    })
});

