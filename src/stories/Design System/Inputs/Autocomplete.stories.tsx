import React from 'react'
import { LeapAutoComplete } from '../../../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = { 
    title: 'Design System/Inputs/Autocomplete',
    component: LeapAutoComplete,
    parameters: {
        docs: {
            description: {
                component: 'Autocomplete is a text field that allows users to select one or more values from a predefined list. It is a combination of a text field and a menu. The text field is used to filter the predefined list. The menu is used to display the filtered list and to select one or more values from it. The values selected by the user are displayed as chips in the text field. The menu can be opened using the mouse, the keyboard, or a touch gesture.',
            },
        },
    },
}
export default meta

const Template: Story<any> = (args) => <LeapAutoComplete {...args} />
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
]

export const Autocomplete = Template.bind({})
Autocomplete.args = {
    disablePortal: true,
    id: "autocomplete",
    options: top100Films,
    sx: {width: 300 },
}