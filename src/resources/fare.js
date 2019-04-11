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

  let res = {};
  for (let fare of fare_info[0].Fares) {
    switch (fare.TicketType) {
      case '成自':
        res[KEYS.limitedExpress] = fare.Price;
        break;
      case '成莒':
        res[KEYS.express] = fare.Price;
        break;
      case '成普':
        res[KEYS.semiExpress] = fare.Price;
        break;
      default:
        break;
    }
  }
  return res;
};
