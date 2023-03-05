import React from "react";
import { Button } from "@mui/material";

export interface QinButtonProps extends React.ComponentProps<typeof Button> {
    custom?: any
}

export const QinButton = (props: QinButtonProps) => {

    return(
        <Button { ...props } />
    )
}