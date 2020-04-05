import { IRoute, RoutePayload } from "./types";

enum RouteTypes {
  "CHANGE_LOCATION" = "CHANGE_LOCATION",
}

export const changeLocation = (payload: IRoute) => ({
  type: RouteTypes.CHANGE_LOCATION,
  payload,
});

export const routeReducer = (
  state: IRoute,
  { type, payload }: RoutePayload
) => {
  console.log("reducer");
  const actions: {
    [t: string]: (state: IRoute, { payload }: { payload: IRoute }) => IRoute;
  } = {
    [RouteTypes.CHANGE_LOCATION]: (state, { payload }) => ({
      location: payload.location,
      params: payload.params,
    }),
  };

  return actions[type](state, { payload }) || state;
};
