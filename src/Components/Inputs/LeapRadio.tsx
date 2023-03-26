import React from "react";
import { FormControl, FormControlLabel, Radio } from "@mui/material";

export interface LeapRadioProps extends React.ComponentProps<typeof FormControlLabel> {}

export const LeapRadio = (props: LeapRadioProps) => {
    return(
        <FormControl>
            <FormControlLabel { ...props } control={<Radio />} />
        </FormControl>
    )
}