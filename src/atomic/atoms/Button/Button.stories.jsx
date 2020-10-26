import React from "react";

import { Btn } from "./Button";

export default {
  title: "Atoms/Button",
  component: Btn,
};

const Template = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click me",
};
