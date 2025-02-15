import React from "react";
import { CircularProgress, Box } from "@mui/material";

const CustomLoader = ({ size, color }) => {
    return (
        <Box
            position="fixed" // Fixed position to cover the entire screen
            top={0}
            left={0}
            width="100vw" // Full viewport width
            height="100vh" // Full viewport height
            display="flex"
            justifyContent="center"
            alignItems="center"
            // bgcolor="rgba(255, 255, 255, 0.8)" // Semi-transparent white background
            zIndex={9999} // Ensure the loader is on top of other components
        >
            <CircularProgress size={size} color={color} />
        </Box>
    );
};

export default CustomLoader;
