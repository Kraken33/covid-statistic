import { IStatisticData, IActionPayload } from "./types";

enum Types {
  "FETCH_STATISTIC_REQUEST" = "FETCH_STATISTIC_REQUEST",
  "RECEIVE_STATISTIC" = "RECEIVE_STATISTIC",
}

export const reducer = (
  state: IActionPayload,
  { type, payload }: IActionPayload
) => {
  switch (type) {
    case Types.FETCH_STATISTIC_REQUEST:
      return {
        ...state,
        allCountries: null,
        allCountriesInfo: null,
        pending: true,
      };
    case Types.RECEIVE_STATISTIC:
      return {
        ...state,
        allCountries: payload.allCountries?.map((countryStatistic) => {
          for (let countryIndex in payload.allCountriesInfo) {
            // @ts-ignore
            let countryInfo = payload.allCountriesInfo[countryIndex];
            if (
              countryInfo?.name === countryStatistic.country ||
              countryInfo?.altSpellings.includes(countryStatistic.country)
            )
              return {
                ...countryStatistic,
                code: countryInfo?.alpha2Code,
              };
          }
          return {
            ...countryStatistic,
            code: null,
          };
        }),
        pending: false,
      };
    default:
      return state;
  }
};

export const fetchStatistic = () => ({
  type: Types.FETCH_STATISTIC_REQUEST,
});

export const receiveStatistic = (payload: IStatisticData) => ({
  type: Types.RECEIVE_STATISTIC,
  payload,
});
