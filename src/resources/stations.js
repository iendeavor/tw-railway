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

