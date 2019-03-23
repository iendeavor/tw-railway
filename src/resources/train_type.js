import src from './train_type.json'
import { LIMITED_EXPRESS, EXPRESS, SEMI_EXPRESS } from '../constants/train'

const parseTrainTypes = () => {
    return Object.freeze(
        src.map(train_type_info => {
            let res = {}

            const name = train_type_info.TrainTypeName.En
            if (name.indexOf('Limited Express') != -1) {
                res[train_type_info.TrainTypeID] = LIMITED_EXPRESS
                res[LIMITED_EXPRESS] = train_type_info.TrainTypeID
            } else if (name.indexOf('Express') != -1) {
                res[train_type_info.TrainTypeID] = EXPRESS
                res[EXPRESS] = train_type_info.TrainTypeID
            } else {
                res[train_type_info.TrainTypeID] = SEMI_EXPRESS
                res[SEMI_EXPRESS] = train_type_info.TrainTypeID
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

