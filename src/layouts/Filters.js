import React from "react";
import { Menu, Input, Dropdown, Label } from "semantic-ui-react";

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
  return (
    <div>
      <Menu vertical inverted>
        <Menu.Menu>
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
        </Menu.Menu>
      </Menu>
    </div>
  );
}
