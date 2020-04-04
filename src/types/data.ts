export interface IStatisticItem {
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface IStatisticWithCountry extends IStatisticItem{
    country: string;
}

export type ApiData = {
    [countryName: string]: {
        data: string;
        confirmed: number;
        deaths: number;
        recovered: number;
    }[]
}