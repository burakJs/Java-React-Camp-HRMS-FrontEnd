import React from "react";
import { Button, Card, Grid, Label, Image } from "semantic-ui-react";

export default function JobAdList() {
  return (
    <div>
      <Card.Group centered>
        <Grid padded>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Card>
                <Card.Content textAlign="left">
                  <Image floated="right">
                    <Label circular size="huge">
                      T
                    </Label>
                  </Image>
                  <Card.Header>Turkcell</Card.Header>
                  <Card.Meta>Flutter Developer</Card.Meta>
                  <Card.Description>
                    Flutter Bilen mallar aranıyor...
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content textAlign="left">
                  <Image floated="right">
                    <Label circular size="huge">
                      A
                    </Label>
                  </Image>
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
