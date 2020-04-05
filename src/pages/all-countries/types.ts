import {
  IStatisticWithCountry,
  IStatisticItem,
  CountriesInfo,
} from "../../types/data";
import { IAction } from "../../types/actions";

export interface IStatistic extends IStatisticItem {
  mostInfected: IStatisticWithCountry[];
}

interface IStatisticWithCountryAndCode extends IStatisticWithCountry {
  code: string;
}

export interface IStatisticData {
  allCountriesInfo: null | CountriesInfo;
  allCountries: null | IStatisticWithCountryAndCode[];
  pending?: boolean;
}

export interface IProps extends Omit<IStatisticData, "allCountriesInfo"> {
  payloadFull: boolean;
}

export interface IActionPayload extends IAction<IStatisticData> {}
