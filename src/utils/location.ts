import { useContext } from "react";
import { RouteContext } from "../components/route";
import { IRoute } from "../components/route/types";

const useLocation = () => {
  const {
    state,
    location,
  }: { state: IRoute; location(payload: IRoute): null } = useContext(
    RouteContext
  );
  return { state, changeLocation: location };
};

export { useLocation };
