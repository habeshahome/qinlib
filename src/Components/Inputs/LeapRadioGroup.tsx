import React from "react";
import { 
    Radio, 
    RadioProps, 
    RadioGroup, 
    RadioGroupProps, 
    FormControlLabel, 
    FormLabel,
    FormControl
} from "@mui/material";

export interface LeapRadioGroupProps extends RadioGroupProps { 
    numberOfButtons: number
}
export interface LeapButtonProps extends RadioProps { }

export const LeapRadioGroup = ({numberOfButtons, ...rest }: LeapRadioGroupProps) => {
    
        return(
            <FormControl>
                <FormLabel> Form Label </FormLabel>
                <RadioGroup { ...rest } > 
                {
                    Array.from(Array(numberOfButtons).keys()).map((index) => 
                    (
                        <FormControlLabel key={index} value={index} control={<Radio />} label={index} />
                    ))
                }
                </RadioGroup>
            </FormControl>
        )
    }