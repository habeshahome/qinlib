import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export interface LeapCheckboxProps extends React.ComponentProps<typeof Checkbox> {
    label: string
}

export const LeapCheckbox = (props: LeapCheckboxProps) => {
    const { label, ...rest } = props
    return(
        <FormControlLabel control={<Checkbox {...rest} />} label={label} />
    )
}