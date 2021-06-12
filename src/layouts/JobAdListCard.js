import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Label } from "semantic-ui-react";

export default function JobAdListCard({ jobAd }) {
  return (
    <div>
      <Link to={`/jobAds/${jobAd.id}`}>
        <Card link style={{ marginTop: 2 + "em" }}>
          <Card.Content textAlign="left">
            <Image floated="right">
              <Label circular size="huge">
                {jobAd.companyName[0]}
              </Label>
            </Image>
            <Card.Header>{jobAd.companyName}</Card.Header>
            <Card.Meta>{jobAd.jobPosition.jobPositionName}</Card.Meta>
            <Card.Description>{jobAd.description}</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
}
