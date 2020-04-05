import {IAction} from "../../types/actions";

export interface IRoute {
    location: string,
    params?: {
        [p: string]: string
    };
}

export type RoutePayload = IAction<IRoute>;