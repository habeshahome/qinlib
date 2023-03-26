import React from "react";
import { LeapTypography } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = {
    title: 'Design System/Inputs/Typography',
    component: LeapTypography
}
export default meta;

const Template: Story<any> = (args) => <LeapTypography {...args}> Typography </LeapTypography>

export const h1 = Template.bind({})
h1.args = {
    variant: 'h1',
    color: 'primary',
    fontWeight: 'bold',
}
