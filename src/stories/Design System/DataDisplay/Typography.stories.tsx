import React from 'react'
import { Typography } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = { 
    title: 'Design System/Inputs/Data Display/Typography',
    component: Typography
}
export default meta

const Template: Story<any> = (args) => <Typography {...args}> Lorem ipsum dolor sit. </Typography>

export const PrimaryTypography = Template.bind({})
PrimaryTypography.args = {
    variant: 'h6',
    color: 'primary',
}

export const SecondaryTypography = Template.bind({})
SecondaryTypography.args = {
    variant: 'h4',
    color: 'secondary',
}
