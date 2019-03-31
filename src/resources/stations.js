import src from './stations.json'

export const stations = Object.freeze(
    src.map(station => {
        return {
            id: station['StationID'] + '',
            name: station['StationName']['Zh_tw'],
        }
    })
)

export const id_name_mapping = Object.freeze(
    src.map(station => {
        return {
            [station['StationId']]: station['StationName']['Zh_tw'],
            [station['StationName']['Zh_tw']]: station['StationId'],
        }
    })
)

