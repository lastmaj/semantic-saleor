import React from "react";

import { NavCategoriesTop } from "./NavCategoriesTop";

export default {
  title: "Organisms/NavCategoriesTop",
  component: NavCategoriesTop,
};

const Template = (args) => <NavCategoriesTop {...args}></NavCategoriesTop>;

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
