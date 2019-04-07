import KEYS from './keys'

export const LABEL = {
    tw: {
        [KEYS.arrival]: 'Arrival',
        [KEYS.departure]: 'Departure',
        [KEYS.fare]: 'Fare',
        [KEYS.smallTransfer]: 'Stop',
        [KEYS.duration]: 'Duration',
        [KEYS.first]: {
            [KEYS.arrival]: '最晚',
            [KEYS.departure]: '最早',
            [KEYS.cheapCost]: '便宜',
            [KEYS.smallTransfer]: '最少',
        },
        [KEYS.last]: {
            [KEYS.arrival]: '最早',
            [KEYS.departure]: '最晚',
            [KEYS.cheapCost]: '昂貴',
            [KEYS.smallTransfer]: '最多',
        }
    }
}

