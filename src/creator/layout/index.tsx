import React from "react";
import { Box } from "@mui/system";

export function CreatorLayout() {
    return( 
        <Box sx={{ display: 'flex', flexDirection: 'column'}}> 
            <Box>
                Header
            </Box>
            <Box>
                <Box>
                    Left Sidebar
                </Box>
                <Box>
                    Main Content
                </Box>
                <Box>
                    Right Sidebar
                </Box>
            </Box>
            <Box>
                Footer
            </Box>
        </Box>
    )
}