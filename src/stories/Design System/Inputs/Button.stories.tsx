import React from 'react'
import { LeapButton } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = { 
    title: 'Design System/Inputs/Button',
    component: LeapButton
}
export default meta

const Template: Story<any> = (args) => <LeapButton {...args}> Button </LeapButton>

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    variant: 'contained',
    color: 'primary',
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    variant: 'contained',
    color: 'secondary',
}

export const QintotButton = Template.bind({})
QintotButton.args = {
    variant: 'contained',
    color: 'qintot',
}
