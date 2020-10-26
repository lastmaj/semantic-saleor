import React, { useState } from "react";

import { Menu } from "semantic-ui-react";

export const NavMenu = ({ items, vertical, children }) => {
  const [active, setActive] = useState(null);

  const handleItemClick = (e, { name }) => setActive(name);

  const renderedItems = items.map((x) => {
    return (
      <Menu.Item
        name={x.name}
        active={active === x.name}
        onClick={handleItemClick}
      ></Menu.Item>
    );
  });

  return (
    <Menu vertical={vertical}>
      {renderedItems}
      {children}
    </Menu>
  );
};
