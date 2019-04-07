import src from './train_type.json'
import KEYS from '../constants/keys'

const parseTrainTypes = () => {
    return Object.freeze(
        src.map(train_type_info => {
            let res = {}

            const name = train_type_info.TrainTypeName.En
            if (name.indexOf('LimitedExpress') !== -1) {
                res[train_type_info.TrainTypeID] = KEYS.limitedExpress
                res[KEYS.limitedExpress] = train_type_info.TrainTypeID
            } else if (name.indexOf('Express') !== -1) {
                res[train_type_info.TrainTypeID] = KEYS.express
                res[KEYS.epress] = train_type_info.TrainTypeID
            } else {
                res[train_type_info.TrainTypeID] = KEYS.semiExpress
                res[KEYS.semiExpress] = train_type_info.TrainTypeID
            }

            return res
        }).reduce((accu, curr) => {
            return Object.assign({}, accu, curr)
        })
    )
}

let train_types = parseTrainTypes()

export const getTrainTypeName = ID => train_types[ID + '']
export const getTrainTypeID = name => train_types[name]

