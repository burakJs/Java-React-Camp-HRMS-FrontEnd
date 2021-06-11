import React from "react";
import { Button, Card, Grid } from "semantic-ui-react";

export default function JobAdList() {
  return (
    <div>
      <Card.Group centered>
        <Grid padded relaxed="very">
          <Grid.Row columns={2}>
            <Grid.Column stretched>
              <Card>
                <Card.Content textAlign="left">
                  <Card.Header>Turkcell</Card.Header>
                  <Card.Meta>Flutter Developer</Card.Meta>
                  <Card.Description>
                    Flutter Bilen mallar aranıyor...
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column stretched>
              <Card>
                <Card.Content textAlign="left">
                  <Card.Header>Apple</Card.Header>
                  <Card.Meta>IOS Developer</Card.Meta>
                  <Card.Description>
                    Swift bilen reisler aranır...
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Group>
    </div>
  );
}
