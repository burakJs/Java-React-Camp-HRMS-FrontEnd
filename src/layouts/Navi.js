import React from "react";
import { Menu, Header } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item>
          <Header as="h3" color="grey" inverted>
            HumanResourcesManagementSystem
          </Header>
        </Menu.Item>
        <Menu.Menu position="right">
          <SignedIn />
          <SignedOut />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
