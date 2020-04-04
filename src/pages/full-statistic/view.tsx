import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/Info';
import RefreshIcon from '@material-ui/icons/Refresh';

import { BaseLayoutContainer } from '../../layouts/base';
import { IProps } from './types';

const statusBadgeColors = {
    'confirmed': '#718c9a',
    'deaths': '#bd0b0b',
    'recovered': '#0d8c0b'
};

const FullStatisticComponent: React.FC<IProps> = ({ statistic, payloadFull })=>{
        const allCases = [
            {
                label: 'Confirmed',
                data: statistic?.confirmed,
                color: statusBadgeColors.confirmed,
                icon: <CheckIcon fontSize="large" color="inherit" style={{ color: '#FFF' }}/>
            },
            {
                label: 'Death',
                data: statistic?.deaths,
                color: statusBadgeColors.deaths,
                icon: <InfoIcon fontSize="large" color="inherit" style={{ color: '#FFF' }}/>
            },
            {
                label: 'Recovered',
                data: statistic?.recovered,
                color: statusBadgeColors.recovered,
                icon: <RefreshIcon fontSize="large" color="inherit" style={{ color: '#FFF' }}/>
            }
        ];

        return payloadFull ?
            <BaseLayoutContainer>
            <Grid container spacing={3} style={{ marginTop: 50 }}>
                {allCases.map((statistic)=> <Grid item xs>
                    <Paper className="text-center card">
                        <Grid container justify='space-between'>
                            <Grid item>
                                <div className="big-badge big-badge--float" style={{ background: statistic.color + '80'}}>
                                    {statistic.icon}
                                </div>
                            </Grid>
                            <Grid item>
                                <h2>{statistic.label}</h2>
                                <h1>{statistic.data}</h1>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>)}
        </Grid>
                <Grid container>
                    <Grid item style={{ margin: '0 auto', marginTop: 50 }}>
                        <BarChart
                            width={1000}
                            height={300}
                            data={statistic?.mostInfected}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="country" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="confirmed" fill={statusBadgeColors.confirmed + '80'} />
                            <Bar dataKey="deaths" fill={statusBadgeColors.deaths + '80'}  />
                            <Bar dataKey="recovered" fill={statusBadgeColors.recovered + '80'} />
                        </BarChart>
                    </Grid>
                </Grid>
            </BaseLayoutContainer>: null;
};

export { FullStatisticComponent };