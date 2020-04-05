import React, { Reducer, useEffect, useReducer } from "react";

import { requests } from "../../requests";
import { IStatisticData } from "./types";
import { fetchStatistic, receiveStatistic, reducer } from "./actions";

import { FullStatisticComponent } from "./view";

const FullStatisticContainer = () => {
  // @TODO Solve it
  const [{ statistic, pending }, dispatch] = useReducer<
    Reducer<any, any>,
    IStatisticData
  >(reducer, { statistic: null, pending: false }, (s) => s);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStatistic());
      const latestStatistic = await requests.latestStatistic();
      const mostInfected = await requests.mostInfected(6);
      dispatch(
        receiveStatistic({
          ...latestStatistic,
          mostInfected,
        })
      );
    };

    fetchData();
  }, []);

  const payloadFull = statistic !== null && !pending;

  return (
    <FullStatisticComponent
      payloadFull={payloadFull}
      statistic={statistic}
      pending={pending}
    />
  );
};

export { FullStatisticContainer };
