import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdList from "../pages/JobAdList";
import Filters from "./Filters";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filters />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
