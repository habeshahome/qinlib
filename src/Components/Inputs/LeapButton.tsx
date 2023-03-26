import React from "react";
import { Button } from "@mui/material";

export interface LeapButtonProps extends React.ComponentProps<typeof Button> {}

export const LeapButton = (props: LeapButtonProps) => {
    return(
        <Button { ...props } />
    )
}