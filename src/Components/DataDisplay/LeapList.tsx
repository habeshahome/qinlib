import React from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"


export function LeapList(){
    return(
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
                List Component
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Age"
                onChange={()=> {console.log("changed")}}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}