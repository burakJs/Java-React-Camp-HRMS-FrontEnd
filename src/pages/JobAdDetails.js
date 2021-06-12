import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Header, Icon, Label } from "semantic-ui-react";
import JobAdService from "../services/jobAdService";

export default function JobAdDetails() {
  let { id } = useParams();
  const [jobAd, setJobAd] = useState({
    jobPosition: {
      jobPositionName: null,
    },
    city: {
      cityName: null,
    },
  });

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService.getJobAdById(id).then((result) => setJobAd(result.data.data));
  }, []);

  return (
    <>
      <Container style={{ marginTop: 2 + "em" }} textAlign="left">
        <Header
          as="h2"
          subheader={jobAd.jobPosition.jobPositionName}
          content={jobAd.companyName}
        ></Header>

        <Label>
          <Header as="h5">
            <Icon name="map marker alternate" />
            {jobAd.city.cityName}
          </Header>
        </Label>
        <Header as="h4">{jobAd.description}</Header>
        <Label icon="money">
          <Header as="h4">
            <Icon name="lira sign" /> {jobAd.salaryMin} - {jobAd.salaryMax}
          </Header>
          <Header as="h4">
            <Icon name="calendar check" /> {jobAd.createdDate}
          </Header>
          <Header as="h4">
            <Icon name="calendar times" /> {jobAd.lastDate}
          </Header>
        </Label>
      </Container>
    </>
  );
}
