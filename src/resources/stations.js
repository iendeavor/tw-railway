import station_source from './stations.json';
import country_source from './countries.json';

const UNKNOWN_COUNTRY = 'UnknownAddress';

export const getCountries = country_src => {
  if (country_src === undefined) {
    country_src = country_source;
  }

  const unknownCountry = [{ id: '0', name: UNKNOWN_COUNTRY }];
  const knownCountry = country_src.map((country, index) => ({
    id: index + 1 + '',
    name: country
  }));

  return Object.freeze(unknownCountry.concat(knownCountry));
};

const getCountryMapping = countries => {
  if (countries === undefined) {
    countries = getCountries();
  }

  return Object.freeze(
    countries
      .map(country => ({
        [country.id]: country.name,
        [country.name]: country.id
      }))
      .reduce((accu, curr) => {
        return Object.assign({}, accu, curr);
      })
  );
};

const country_mapping = getCountryMapping();

const getCountryID = (name, mapping) => {
  if (mapping === undefined) {
    mapping = country_mapping;
  }
  return mapping[name];
};

export const getStations = src => {
  if (src === undefined) {
    src = station_source;
  }

  return Object.freeze(
    src
      .map(station => {
        let country;
        if (station['StationAddress'].length > 2) {
          country = station['StationAddress'].slice(0, 2);
        } else {
          country = UNKNOWN_COUNTRY;
        }
        return {
          [country]: {
            id: station['StationID'] + '',
            name: station['StationName']['En'],
            country_id: getCountryID(country)
          }
        };
      })
      .reduce((accu, curr) => {
        const country = Object.keys(curr)[0];
        const country_id = country_mapping[country];
        if (!(accu[country_id] instanceof Array)) {
          accu[country_id] = [];
        }
        accu[country_id].push(curr[country]);
        return accu;
      })
  );
};

const stationsOfCountryMapping = getStations();

export const getStationsOfCountry = (country, stations) => {
  if (country === undefined) {
    return [];
  }
  if (stations === undefined) {
    stations = stationsOfCountryMapping;
  }

  return stationsOfCountryMapping[country];
};
