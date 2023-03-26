import React from 'react'
import { LeapRadio } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = { 
    title: 'Design System/Inputs/Radio',
    component: LeapRadio
}
export default meta

const Template: Story<any> = (args) => <LeapRadio {...args} />

export const RadioButton = Template.bind({})
RadioButton.args = {
    variant: 'contained',
    color: 'primary',
    label: 'Radio',
    checked: true
}

export const RadioButtonOutlined = Template.bind({})
RadioButtonOutlined.args = {
    variant: 'outlined',
    color: 'secondary',
    label: 'Radio',
}
