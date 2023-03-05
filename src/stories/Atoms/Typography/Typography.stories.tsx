import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QinTypography } from '../../../Components/Atoms';

const meta: Meta = {
    title: 'Atoms/Typography',
    component: QinTypography,
    argTypes: {
        variant: {
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'],
                control: { type: 'select' },
            },
        color: {
            options: ['primary', 'secondary', 'textPrimary', 'textSecondary', 'error', '#000000', '#ffffff'],
            control: { type: 'radio' },
        },
        align: {
            options: ['inherit', 'left', 'center', 'right', 'justify'],
            control: { type: 'radio' },
        }
        
    }
}
export default meta

const Template: Story<any> = (args) => <QinTypography {...args} > Typography </QinTypography>;

export const Component = Template.bind({});
Component.args ={
    variant: 'h1'
}

export const h1 = Template.bind({});
h1.args = {
    variant: 'h1',
    sx: {
        fontFamily: 'IBM Plex Sans'
    }
}

export const h2 = Template.bind({});
h2.args = {
    variant: 'h2',
    sx: {
        fontFamily: 'Roboto'
    }
}

export const h3 = Template.bind({});
h3.args = {
    variant: 'h3'
}

export const h4 = Template.bind({});
h4.args = {
    variant: 'h4'
}

export const h5 = Template.bind({});
h5.args = {
    variant: 'h5'
}

export const h6 = Template.bind({});
h6.args = {
    variant: 'h6'
}

export const caption = Template.bind({});
caption.args = {
    variant: 'caption',
    children: 'This is a caption text',
    argTyps: {
        variant: 'can be h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, overline', 
        children: 'Can be a string or a ReactNode'
    }
}

export const body1 = Template.bind({});
body1.args = {
    variant: 'body1',
    children: 'This is a body1 text'
}

export const body2 = Template.bind({});
body2.args = {
    variant: 'body2',
    children: 'This is a body2 text'
}