import React from "react";
import { Typography, TypographyProps } from '@mui/material'

export interface LeapTypographyProps extends TypographyProps {}

export const LeapTypography = (props: LeapTypographyProps) => { 
    return(
        <Typography { ...props } />
    )
 } 