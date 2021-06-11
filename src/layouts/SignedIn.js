import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://pbs.twimg.com/profile_images/1380177773726154753/GwPoXBNK_400x400.jpg"
        />
        <Dropdown pointing="top right" text="Burak">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
