import { IRequests } from "./types/requests";
import { IStatisticItem, ApiData } from "./types/data";

const latestStatisticHandler = (statistic: ApiData) => {
  return Object.entries(statistic).reduce(
    (acc: IStatisticItem, [countryName, stat]) => {
      const statAtLastDay = stat[stat.length - 1];
      acc.recovered += statAtLastDay.recovered;
      acc.deaths += statAtLastDay.deaths;
      acc.confirmed += statAtLastDay.confirmed;
      return acc;
    },
    {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    }
  );
};

const mostInfectedHandler = (count: number) => (statistic: ApiData) => {
  return Object.entries(statistic)
    .map(([countryName, stat]) => {
      const statAtLastDay = stat[stat.length - 1];
      return {
        country: countryName,
        ...statAtLastDay,
      };
    })
    .sort((current, next) => (current.confirmed < next.confirmed ? 1 : -1))
    .splice(0, count);
};

const allCountriesHandler = (statistic: ApiData) => {
  return Object.entries(statistic)
    .map(([countryName, statistic]) => {
      const statisticPerDay = statistic[statistic.length - 1];
      return {
        country: countryName,
        ...statisticPerDay,
      };
    })
    .sort((current, next) => (current.confirmed < next.confirmed ? 1 : -1));
};

export const requests: IRequests = {
  latestStatistic: () =>
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then((response) => response.json())
      .then(latestStatisticHandler),
  mostInfected: (count) =>
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then((response) => response.json())
      .then(mostInfectedHandler(count)),
  allCountries: () =>
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then((response) => response.json())
      .then(allCountriesHandler),
  getCountriesInformation: () =>
    fetch("https://restcountries.eu/rest/v2/all").then((response) =>
      response.json()
    ),
};
