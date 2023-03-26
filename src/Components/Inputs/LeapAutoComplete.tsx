import { Autocomplete, TextField } from "@mui/material";

export interface LeapAutoCompleteProps extends React.ComponentProps<typeof Autocomplete> {}

export const LeapAutoComplete = (props: LeapAutoCompleteProps) => {
    const { options, ...rest } = props;
    return ( 
    <Autocomplete 
        {...rest}  
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    )
};