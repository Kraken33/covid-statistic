export interface IAction<Payload = {}> {
    type: any;
    payload: Payload;
}