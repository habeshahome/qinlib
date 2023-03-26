import React from "react";
import { LeapThemeGenerator } from "../../index";
import { Story } from "@storybook/react";

export default {
    title: "Leap Theme Generator",
    component: LeapThemeGenerator,
}

const Template: Story<any> = (args) => <LeapThemeGenerator {...args} />

export const ThemeGenerator = Template.bind({})