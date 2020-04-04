import { IStatisticWithCountry, IStatisticItem } from '../../types/data';

export interface IStatistic extends IStatisticItem{
    mostInfected: IStatisticWithCountry[];
}

export interface IStatisticData {
    statistic: null | IStatistic;
    pending: boolean;
}

export interface IProps extends IStatisticData {
    payloadFull: Boolean;
}