import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";
import JobAdListCard from "../layouts/JobAdListCard";
import JobAdService from "../services/jobAdService";

export default function JobAdList() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService
      .getJobAds()
      .then((result) => setJobAds(result.data.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Card.Group centered>
        <Grid padded>
          {jobAds.map((jobAd, index) => (
            <div key={jobAd.id}>
              <JobAdListCard jobAd={jobAd} />
            </div>
          ))}
        </Grid>
      </Card.Group>
    </div>
  );
}
