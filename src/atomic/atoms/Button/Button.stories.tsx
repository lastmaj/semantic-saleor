import React from "react";

import { Btn } from "./Button";
import { Iprops } from "./types";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Atoms/Button",
  component: Btn,
};

const Template: Story<Iprops> = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click me",
};
