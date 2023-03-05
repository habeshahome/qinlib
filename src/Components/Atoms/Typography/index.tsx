import React from "react";
import { Typography } from '@mui/material'

export interface QinTypographyProps extends React.ComponentProps<typeof Typography> {
    custom?: any
}

export const QinTypography = (props: QinTypographyProps) => { 
    return(
        <Typography { ...props } />
    )
 }