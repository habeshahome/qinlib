import React from "react";
import { Button, ButtonProps, ButtonGroup, ButtonGroupProps } from "@mui/material";

export interface LeapButtonGroupProps extends ButtonGroupProps { 
    numberOfButtons: number
}
export interface LeapButtonProps extends ButtonProps { }

export const LeapButtonGroup = ({numberOfButtons, ...rest }: LeapButtonGroupProps) => {
    
        return(
            <ButtonGroup { ...rest } > 
            {
                Array.from(Array(numberOfButtons).keys()).map((index) => 
                (
                    <Button key={index} >{index}</Button>
                ))
            }
            </ButtonGroup>
        )
    }