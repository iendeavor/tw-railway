import KEYS from './keys'

export const LABEL = {
    tw: {
        [KEYS.arrival]: '抵達時間',
        [KEYS.departure]: '開車時間',
        [KEYS.cheapCost]: '票價',
        [KEYS.smallTransfer]: '轉乘次數',
        [KEYS.duration]: '行車時間',
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

