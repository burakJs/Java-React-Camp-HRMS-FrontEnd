import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://yt3.ggpht.com/ytc/AAUvwngwJNZN3WObqCSP3MlLYGiR3cGFXbOkO3vWScSp2A=s900-c-k-c0x00ffffff-no-rj"
        />
        <Dropdown pointing="top right" text="Engin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
