import React, { Reducer, useEffect, useReducer } from "react";

import { requests } from "../../requests";
import { fetchStatistic, receiveStatistic, reducer } from "./actions";

import { AllCountriesStatisticComponent } from "./view";

const AllCountriesStatisticContainer = () => {
  // @TODO Solve it
  const [{ allCountries, pending }, dispatch] = useReducer<Reducer<any, any>>(
    reducer,
    { allCountries: null, allCountriesInfo: null, pending: false }
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStatistic());
      const allCountries = await requests.allCountries();
      const allCountriesInfo = await requests.getCountriesInformation();
      dispatch(
        receiveStatistic({
          allCountriesInfo,
          allCountries,
        })
      );
    };

    fetchData();
  }, []);

  const payloadFull = allCountries !== null && !pending;

  return (
    <AllCountriesStatisticComponent
      payloadFull={payloadFull}
      allCountries={allCountries}
      pending={pending}
    />
  );
};

export { AllCountriesStatisticContainer };
