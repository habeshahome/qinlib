import React from 'react'
import { LeapCheckbox } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = { 
    title: 'Design System/Inputs/Checkbox',
    component: LeapCheckbox
}
export default meta

const Template: Story<any> = (args) => <LeapCheckbox {...args} />

export const Checked = Template.bind({})
Checked.args = {
    color: 'primary',
    defaultChecked: true,
    label: 'Agree',
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    label: 'Send me emails',
}
