import React from "react";
import { Menu, Input, Dropdown, Button } from "semantic-ui-react";
import JobAdService from "../services/jobAdService";

export default function Filters() {
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

  const cityArray = [
    {
      key: 1,
      text: "Eskişehir",
      value: 1,
    },
    {
      key: 2,
      text: "Ankara",
      value: 2,
    },
  ];
  const sortUp = () => {
    let jobAdService = new JobAdService();
    jobAdService
      .add(
        1,
        "Samsung",
        20,
        "2021-01-21",
        "Bu bir deneme açıklamasıdır",
        1,
        4250,
        2750
      )
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
    console.log(new Date().toISOString().slice(0, 10));
  };
  return (
    <div>
      <Menu vertical inverted>
        <Menu.Menu style={{}}>
          <Menu.Item>
            <Input icon="search" placeholder="Şirket İsmi" />
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
              options={cityArray}
              clearable
            ></Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Button.Group>
              <Button icon="sort numeric up" onClick={sortUp} />
              <Button icon="sort numeric down" />
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
