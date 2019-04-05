export const ARRIVAL         = 'ARRIVAL'
export const DEPARTURE      = 'DEPARTURE'
export const CHEAP_COST     = 'CHEAP_COST'
export const SMALL_TRANSFER = 'SMALL_TRANSFER'

export const FIRST          = 'FIRST'
export const LAST           = 'LAST'

export const LABEL = {
    tw: {
        [ARRIVAL]: '到站時間',
        [DEPARTURE]: '離站時間',
        [CHEAP_COST]: '票價',
        [SMALL_TRANSFER]: '轉乘次數',
        [FIRST]: {
            [ARRIVAL]: '最晚',
            [DEPARTURE]: '最早',
            [CHEAP_COST]: '便宜',
            [SMALL_TRANSFER]: '最少',
        },
        [LAST]: {
            [ARRIVAL]: '最早',
            [DEPARTURE]: '最晚',
            [CHEAP_COST]: '昂貴',
            [SMALL_TRANSFER]: '最多',
        }
    }
}
