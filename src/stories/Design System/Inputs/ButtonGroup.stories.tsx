import React from 'react'
import { LeapButtonGroup } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = { 
    title: 'Design System/Inputs/ButtonGroup',
    component: LeapButtonGroup
}
export default meta

const Template: Story<any> = (args) => <LeapButtonGroup {...args}> Button </LeapButtonGroup>

export const Horizontal = Template.bind({})
Horizontal.args = {
    orientation: 'horizontal',
    numberOfButtons: 3
}

export const Vertical = Template.bind({})
Vertical.args = {
    orientation: 'vertical',
    numberOfButtons: 3
}