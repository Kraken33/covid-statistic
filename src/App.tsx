import React from "react";
import "./App.css";

import { RouteProviderComponent } from "./components/route";
import { FullStatisticContainer } from "./pages/full-statistic";
import { AllCountriesStatisticContainer } from "./pages/all-countries";
import { BaseLayoutContainer } from "./layouts/base";

function App() {
  return (
    <RouteProviderComponent>
      <BaseLayoutContainer key="/">
        <FullStatisticContainer />
      </BaseLayoutContainer>
      <BaseLayoutContainer key="/countries">
        <AllCountriesStatisticContainer />
      </BaseLayoutContainer>
    </RouteProviderComponent>
  );
}

export default App;
