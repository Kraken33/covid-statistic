import { IStatisticItem, IStatisticWithCountry, CountriesInfo } from "./data";

export interface IRequests {
  latestStatistic: () => Promise<IStatisticItem>;
  mostInfected: (count: number) => Promise<IStatisticWithCountry[]>;
  allCountries: () => PromiseLike<IStatisticWithCountry[] | any>;
  getCountriesInformation: () => Promise<CountriesInfo>;
}
