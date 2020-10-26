import React from "react";

import { NavMenu } from "./NavMenu";

export default {
  title: "Molecules/NavMenu",
  component: NavMenu,
};

const Template = (args) => <NavMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: "Men" },
    { name: "Women" },
    { name: "Cats" },
    { name: "Cyborgs" },
    { name: "Supes" },
    { name: "Foos" },
    { name: "Bars" },
    { name: "Electronics" },
    { name: "Entertainment" },
    { name: "Witches" },
    { name: "Witchers" },
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Default.args,
  vertical: true,
};
