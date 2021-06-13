import React, { useEffect, useState } from "react";
import { Menu, Input, Dropdown, Button } from "semantic-ui-react";
import CityService from "../services/cityService";

export default function Filters() {
  const cityService = new CityService();
  const [cities, setCities] = useState([]);
  const [cityIsLoading, setCityIsLoading] = useState(true);

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
              options={positionArray}
              clearable
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
