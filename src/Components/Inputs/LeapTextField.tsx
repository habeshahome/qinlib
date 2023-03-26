import React from "react";
import { TextField } from "@mui/material";

export interface LeapTextFieldProps extends Partial<typeof TextField> {}

export const LeapTextField = (props: LeapTextFieldProps) => {
    return <TextField {...props} />;
};
