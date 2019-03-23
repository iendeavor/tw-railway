export const ARRIVE         = 'ARRIVE'
export const DEPARTURE      = 'DEPARTURE'
export const CHEAP_COST     = 'CHEAP_COST'
export const SMALL_TRANSFER = 'SMALL_TRANSFER'

export const FIRST          = 'FIRST'
export const LAST           = 'LAST'

export const LABEL = {
    tw: {
        [ARRIVE]: '到站時間',
        [DEPARTURE]: '離站時間',
        [CHEAP_COST]: '票價',
        [SMALL_TRANSFER]: '轉乘次數',
        [FIRST]: {
            [ARRIVE]: '最晚優先',
            [DEPARTURE]: '最早優先',
            [CHEAP_COST]: '便宜優先',
            [SMALL_TRANSFER]: '最少優先',
        },
        [LAST]: {
            [ARRIVE]: '最早優先',
            [DEPARTURE]: '最晚優先',
            [CHEAP_COST]: '最貴優先',
            [SMALL_TRANSFER]: '最多優先',
        }
    }
}

