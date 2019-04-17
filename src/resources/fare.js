import KEYS from '../constants/keys';

export const getFare = (from, to) => {
  return new Promise((success, error) => {
    let request = new XMLHttpRequest();
    request.onload = () => {
      if (request.status === 200) {
        const fare = JSON.parse(request.responseText);
        const formattedFare = formatFare(fare);
        success(formattedFare);
      }
    };
    request.open('GET', getFareURL(from, to), true);
    request.send();
  });
};

const getFareURL = (from, to) => {
  return (
    'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/ODFare/' +
    from +
    '/to/' +
    to +
    '?$format=JSON'
  );
};

const formatFare = fare_info => {
  if (fare_info[0] === undefined) return {};

  const fares = fare_info[0].Fares.filter(
    fare_info =>
      fare_info.TicketType.indexOf('成') !== -1 &&
      fare_info.TicketType.length === 2
  );
  let res = {};
  for (let fare of fares) {
    switch (fare.TicketType) {
      case '成自':
        res[KEYS.tzeTrain] = fare.Price;
        break;
      case '成莒':
        res[KEYS.chuTrain] = fare.Price;
        break;
      case '成復':
        res[KEYS.fuTrain] = fare.Price;
        break;
      case '成普':
        res[KEYS.ordTrain] = fare.Price;
        break;
      default:
        break;
    }
  }
  return res;
};
