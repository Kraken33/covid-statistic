import { IStatisticItem, IStatisticWithCountry } from './data';

export interface IRequests {
    latestStatistic: ()=>Promise<IStatisticItem>,
    mostInfected: (count: number)=>Promise<IStatisticWithCountry[]>,
    allCases: ()=>Promise<any>
}