import src from './stations.json'

export const stations = Object.freeze(
    src.map(station => {
        return {
            id: station['StationID'] + '',
            name: station['StationName']['En'],
        }
    })
)

const mapping = Object.freeze(
    src.map(station => {
        return {
            [station['StationID']]: station['StationName']['En'],
            [station['StationName']['En']]: station['StationID'],
        }
    }).reduce((accu, curr) => {
        return Object.assign({}, accu, curr)
    })
)

export const getName = ID => mapping[ID]
export const getID = name => mapping[name]

export const getCountries = () => [
    '基隆',
    '臺北',
    '新北',
    '桃園',
    '宜蘭',
    '新竹',
    '苗栗',
    '臺中',
    '南投',
    '彰化',
    '雲林',
    '嘉義',
    '臺南',
    '高雄',
    '屏東',
    '臺東',
    '花蓮',
    '金門',
    '連江',
    '澎湖',
]

export const stationsOfCountry = Object.freeze(
    src.map(station => {
        let country
        if (station['StationAddress'].length > 2) {
            country = station['StationAddress'].slice(0, 2)
        } else {
            country = 'UnknownAddress'
        }
        return {
            [country]: station['StationID']
        }
    }).reduce((accu, curr) => {
        let country = Object.keys(curr)[0]
        if (!(accu[country] instanceof Array)) {
            accu[country] = []
        }
        accu[country].push(curr[country])
        return accu
    })
)

