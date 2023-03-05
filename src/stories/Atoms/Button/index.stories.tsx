import { QinButton } from "../../../Components/Atoms";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
    title: "Atoms/Button",
    component: QinButton,
    argTypes: {
        variant: {
            options: ['text', 'outlined', 'contained'],
            control: { type: 'select' },
        },
        color: {
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'inherit', 'default', '#000000', '#ffffff'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    }
}
export default meta

const Template: Story<any> = (args) => <QinButton {...args} > Button </QinButton>;

export const Component = Template.bind({});
Component.args = {}

export const Primary = Template.bind({});
Primary.args = {
    variant: 'contained',
    color: 'primary'
}