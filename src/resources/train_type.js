import source from './train_type.json';
import KEYS from '../constants/keys';

export const getTrainTypesMapping = src => {
  if (src === undefined) {
    src = source;
  }

  return Object.freeze(
    src
      .map(train_type_info => {
        let res = {};

        const name = train_type_info.TrainTypeName.En.toLowerCase();
        if (name.indexOf('tze') !== -1) {
          res[train_type_info.TrainTypeID] = KEYS.tzeTrain;
          res[KEYS.tzeTrain] = train_type_info.TrainTypeID;
        } else if (name.indexOf('chu') !== -1) {
          res[train_type_info.TrainTypeID] = KEYS.chuTrain;
          res[KEYS.chuTrain] = train_type_info.TrainTypeID;
        } else if (name.indexOf('local') !== -1) {
          res[train_type_info.TrainTypeID] = KEYS.fuTrain;
          res[KEYS.fuTrain] = train_type_info.TrainTypeID;
        } else {
          res[train_type_info.TrainTypeID] = KEYS.ordTrain;
          res[KEYS.ordTrain] = train_type_info.TrainTypeID;
        }

        return res;
      })
      .reduce((accu, curr) => {
        return Object.assign({}, accu, curr);
      }, {})
  );
};

let train_types_mapping = getTrainTypesMapping();

export const getTrainTypeName = (ID, train_types) => {
  if (train_types === undefined) {
    train_types = train_types_mapping;
  }
  return train_types[ID + ''];
};

export const getTrainTypeID = (name, train_types) => {
  if (train_types === undefined) {
    train_types = train_types_mapping;
  }
  return train_types[name];
};
