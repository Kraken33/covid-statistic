import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import { IProps } from "./types";
import Paper from "@material-ui/core/Paper";

const AllCountriesStatisticComponent: React.FC<IProps> = ({
  payloadFull,
  allCountries,
}) => {
  return payloadFull ? (
    <Grid container spacing={3}>
      {allCountries?.map((statisticByCountry, index) => (
        <Grid item xs={4} style={{ marginBottom: 50 }}>
          <Paper className="card">
            <Grid container justify="space-between">
              <Grid item>
                <img
                  src={`https://www.countryflags.io/${statisticByCountry.code}/flat/64.png`}
                />
              </Grid>
              <Grid item container xs={9}>
                <Grid xs={12} style={{ marginBottom: 30, textAlign: "right" }}>
                  <Typography variant="h6" component="span">
                    {statisticByCountry.country}
                  </Typography>
                  <Typography variant="h3" component="span">
                    {" "}
                    {index + 1}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                style={{ paddingTop: 20, textAlign: "center" }}
              >
                <Grid xs={4}>
                  <Typography component="b">Confirmed </Typography>
                  <Typography variant="h6">
                    {statisticByCountry.confirmed}
                  </Typography>
                </Grid>

                <Grid xs={4}>
                  <Typography component="b">Deaths </Typography>
                  <Typography variant="h6">
                    {statisticByCountry.deaths}
                  </Typography>
                </Grid>

                <Grid xs={4}>
                  <Typography component="b">Recovered </Typography>
                  <Typography variant="h6">
                    {statisticByCountry.recovered}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  ) : (
    <LinearProgress />
  );
};

export { AllCountriesStatisticComponent };
