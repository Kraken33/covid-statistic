import React, { useReducer } from "react";

import { changeLocation, routeReducer } from "./actions";
import { IRoute } from "./types";

export const RouteContext = React.createContext({
  state: {
    location: window.location.pathname,
  },
  location: (payload: IRoute) => null,
});

const RouteProvider = RouteContext.Provider;
const RouteConsumer = RouteContext.Consumer;

const RouteProviderComponent: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    routeReducer,
    {
      location: window.location.pathname,
      params: {},
    },
    (s) => s
  );

  const location = (payload: IRoute) => {
    console.log("location");
    window.history.pushState(
      payload.location,
      payload.location,
      payload.location
    );
    return dispatch(changeLocation(payload));
  };

  console.log(state);

  const getCurrentComponent = (path: string) => (
    components: React.ReactElement[]
  ) => {
    if (components && components.length)
      for (let i = 0; i < components.length; i++) {
        const component: React.ReactElement = components[i];
        if (path === component.key) return component;
      }
    else return components;
  };

  return (
    <RouteProvider value={{ state, location: location as any }}>
      {getCurrentComponent(state.location)(children as React.ReactElement[])}
    </RouteProvider>
  );
};

export { RouteProviderComponent, RouteConsumer };
