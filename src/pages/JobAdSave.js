import { Field, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  Grid,
  GridColumn,
  GridRow,
  Input,
  Label,
  Select,
  TextArea,
} from "semantic-ui-react";
import JobTypeService from "../services/jobTypeService";
import JobWorkingTimeService from "../services/jobWorkingTimeService";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";

export default function JobAdSave() {
  const jobTypeService = new JobTypeService();
  const jobWorkingTimeService = new JobWorkingTimeService();
  const cityService = new CityService();
  const jobPositionService = new JobPositionService();

  const [jobTypes, setJobTypes] = useState([]);
  const [jobWorkingTimes, setJobWorkingTimes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  const [jobTypeIsLoading, setJobTypeIsLoading] = useState(false);
  const [jobWorkingTimeIsLoading, setJobWorkingTimeIsLoading] = useState(false);
  const [cityIsLoading, setCityIsLoading] = useState(false);
  const [jobPositionIsLoading, setJobPositionIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      companyName: "",
      count: 0,
      cityId: 0,
      lastDate: new Date().toISOString().slice(0, 10),
      description: "",
      jobPosId: 0,
      jobTypeId: 0,
      jobWorkingTimeId: 0,
      salaryMax: 0,
      salaryMin: 0,
    },

    onSubmit: (values) => {
      console.clear();
      console.log(values);
    },
  });

  useEffect(() => {
    let jobTypeList = [];
    let jobWorkingTimeList = [];
    let cityList = [];
    let jobPosList = [];

    setJobTypeIsLoading(true);
    setJobWorkingTimeIsLoading(true);
    setCityIsLoading(true);
    setJobPositionIsLoading(true);

    jobTypeService.getAll().then((result) => {
      result.data.data.map((jobType) => {
        jobTypeList.push({
          key: jobType.jobTypeName,
          value: jobType.id,
        });
      });
      setJobTypes(jobTypeList);
      setJobTypeIsLoading(false);
    });

    jobWorkingTimeService.getAll().then((result) => {
      result.data.data.map((jobWorkingTime) => {
        jobWorkingTimeList.push({
          key: jobWorkingTime.jobWorkingTimeName,
          value: jobWorkingTime.id,
        });
      });
      setJobWorkingTimes(jobWorkingTimeList);
      setJobWorkingTimeIsLoading(false);
    });

    cityService.getAll().then((result) => {
      result.data.data.map((city) => {
        cityList.push({
          key: city.cityName,
          value: city.id,
        });
      });
      setCities(cityList);
      setCityIsLoading(false);
    });

    jobPositionService.getAll().then((result) => {
      result.data.data.map((jobPos) => {
        jobPosList.push({
          key: jobPos.jobPositionName,
          value: jobPos.id,
        });
      });
      setJobPositions(jobPosList);
      setJobPositionIsLoading(false);
    });
  }, []);

  return (
    <div>
      <Grid padded columns="1">
        <Form
          onSubmit={formik.handleSubmit}
          loading={
            cityIsLoading ||
            jobTypeIsLoading ||
            jobPositionIsLoading ||
            jobWorkingTimeIsLoading
          }
        >
          <GridColumn style={{ margin: 20 }}>
            <Input
              name="companyName"
              type="text"
              label="Şirket Adı"
              onChange={formik.handleChange}
              value={formik.values.companyName}
            />
          </GridColumn>
          <GridColumn style={{ margin: 20 }}>
            <GridRow>
              <Input
                name="count"
                type="number"
                label="Çalışan Sayısı"
                style={{ width: 80 }}
                onChange={formik.handleChange}
                value={formik.values.count}
              />
              <Input
                name="salaryMax"
                type="number"
                label="Max Maaş"
                style={{ width: 100, marginLeft: 120, marginRight: 100 }}
                onChange={formik.handleChange}
                value={formik.values.salaryMax}
              />
              <Input
                name="Min Maaş"
                type="number"
                label="Salary Min"
                style={{ width: 100 }}
                onChange={formik.handleChange}
                value={formik.values.salaryMin}
              />
            </GridRow>
          </GridColumn>
          <GridColumn style={{ margin: 20 }}>
            <Input
              name="lastDate"
              type="date"
              label="Last Date"
              style={{ width: 200 }}
              onChange={formik.handleChange}
              value={formik.values.lastDate}
            />
          </GridColumn>
          <GridColumn style={{ margin: 20 }}>
            <Label>Şehir</Label>
            <br />
            <br />
            <select name="cityId" onChange={formik.handleChange}>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.key}
                </option>
              ))}
            </select>
          </GridColumn>
          <GridColumn style={{ margin: 20 }}>
            <Label>İş Pozisyonu</Label>
            <br />
            <br />
            <select name="jobPosId" onChange={formik.handleChange}>
              {jobPositions.map((jobPos) => (
                <option key={jobPos.value} value={jobPos.value}>
                  {jobPos.key}
                </option>
              ))}
            </select>
          </GridColumn>
          <GridColumn style={{ margin: 20 }}>
            <Label>İş Tipi</Label>
            <br />
            <br />
            <select name="jobTypeId" onChange={formik.handleChange}>
              {jobTypes.map((jobType) => (
                <option key={jobType.value} value={jobType.value}>
                  {jobType.key}
                </option>
              ))}
            </select>
          </GridColumn>
          <GridColumn style={{ margin: 20 }}>
            <Label>İş Çalışma Saati</Label>
            <br />
            <br />
            <select name="jobWorkingTimeId" onChange={formik.handleChange}>
              {jobWorkingTimes.map((jobWorkingTime) => (
                <option key={jobWorkingTime.value} value={jobWorkingTime.value}>
                  {jobWorkingTime.key}
                </option>
              ))}
            </select>
          </GridColumn>

          <GridColumn style={{ marginBottom: 10 }}>
            <GridRow>
              <br />
              <Label size="large">Açıklama</Label>
              <br />
              <br />
              <TextArea
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </GridRow>
          </GridColumn>
          <Button type="submit">Submit</Button>
        </Form>
      </Grid>
    </div>
  );
}
