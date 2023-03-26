import React from 'react'
import { LeapRadioGroup } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = { 
    title: 'Design System/Inputs/RadioGroup',
    component: LeapRadioGroup
}
export default meta

const Template: Story<any> = (args) => <LeapRadioGroup {...args}> Radio </LeapRadioGroup>

export const Horizontal = Template.bind({})
Horizontal.args = {
    orientation: 'horizontal',
    numberOfRadios: 3
}

export const Vertical = Template.bind({})
Vertical.args = {
    orientation: 'vertical',
    numberOfRadios: 3
}