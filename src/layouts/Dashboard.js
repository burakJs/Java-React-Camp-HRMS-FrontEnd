import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdList from "../pages/JobAdList";
import { Route } from "react-router";
import Filters from "./Filters";
import { Switch } from "react-router-dom";
import JobAdDetails from "../pages/JobAdDetails";
import PortfolioList from "../pages/PortfolioList";
import JobAdSave from "../pages/JobAdSave";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filters />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route exact path="/" component={JobAdList} />
              <Route exact path="/jobAds" component={JobAdList} />
              <Route exact path="/jobAds/:id" component={JobAdDetails} />
              <Route exact path="/portfolios" component={PortfolioList} />
              <Route exact path="/jobAdSave" component={JobAdSave} />
              <Route render={() => <h1>Route not found</h1>} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
