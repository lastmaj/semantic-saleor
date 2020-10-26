import React from "react";

import { NavMenu } from "../../molecules/Menu/NavMenu";
import { Dropdown } from "semantic-ui-react";
export const NavCategoriesTop = ({ items }) => {
  return (
    <NavMenu items={items}>
      <Dropdown item text="Supercategory" simple>
        <Dropdown.Menu>
          <Dropdown.Item text="here" />
          <Dropdown.Item text="there" />
          <Dropdown.Item text="everywhere" />
        </Dropdown.Menu>
      </Dropdown>
    </NavMenu>
  );
};
