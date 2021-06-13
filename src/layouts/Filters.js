import React, { useEffect, useState } from "react";
import { Menu, Input, Dropdown, Button } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";

export default function Filters() {
  const cityService = new CityService();
  const jobPositionService = new JobPositionService();
  const [cities, setCities] = useState([]);
  const [cityIsLoading, setCityIsLoading] = useState(true);
  const [jobPositions, setJobPositions] = useState([]);
  const [jobPositionsIsLoading, setJobPositionsIsLoading] = useState(true);

  const positionArray = [
    {
      key: 1,
      text: "Flutter Dev",
      value: 1,
    },
    {
      key: 2,
      text: "Swift Dev",
      value: 2,
    },
  ];

  useEffect(() => {
    let cityList = [];
    let jobPosList = [];

    setCityIsLoading(true);
    setJobPositionsIsLoading(true);

    cityService.getAll().then((result) => {
      result.data.data.map((city) => {
        cityList.push({
          key: city.id,
          text: city.cityName,
          value: city.id,
        });
      });
      setCities(cityList);
      setCityIsLoading(false);
    });

    jobPositionService.getAll().then((result) => {
      result.data.data.map((jobPos) => {
        jobPosList.push({
          key: jobPos.id,
          text: jobPos.jobPositionName,
          value: jobPos.id,
        });
      });
      setJobPositions(jobPosList);
      setJobPositionsIsLoading(false);
      console.log(jobPositionsIsLoading);
    });
  }, []);
  return (
    <div>
      <Menu vertical inverted>
        <Menu.Menu style={{}}>
          <Menu.Item>
            <Input
              icon="search"
              placeholder="Şirket İsmi"
              //TODO: Redux öğrenince anca :D
              // onChange={(e) => filterByCompanyName(e.target.value)}
            />
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              placeholder="İş Pozisyonu"
              selection
              options={jobPositions}
              clearable
              loading={jobPositionsIsLoading}
            ></Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              placeholder="Şehir"
              selection
              options={cities}
              clearable
              loading={cityIsLoading}
            ></Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Button.Group>
              <Button icon="sort numeric up" />
              <Button icon="sort numeric down" />
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
