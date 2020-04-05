import { IStatisticData } from "./types";
import { IAction } from "../../types/actions";

enum Types {
  "FETCH_STATISTIC_REQUEST" = "FETCH_STATISTIC_REQUEST",
  "RECEIVE_STATISTIC" = "RECEIVE_STATISTIC",
}

export const reducer = (
  state: IStatisticData,
  { type, payload }: IAction<IStatisticData["statistic"]>
) => {
  switch (type) {
    case Types.FETCH_STATISTIC_REQUEST:
      return {
        statistic: null,
        pending: true,
      };
    case Types.RECEIVE_STATISTIC:
      return {
        statistic: payload,
        pending: false,
      };
  }
};

export const fetchStatistic = () => ({
  type: Types.FETCH_STATISTIC_REQUEST,
});

export const receiveStatistic = (payload: IStatisticData["statistic"]) => ({
  type: Types.RECEIVE_STATISTIC,
  payload,
});
