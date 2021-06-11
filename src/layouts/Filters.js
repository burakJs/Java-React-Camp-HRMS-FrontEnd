import React from "react";
import { Menu } from "semantic-ui-react";

export default function Filters() {
  return (
    <div>
      <Menu pointing vertical inverted>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}
