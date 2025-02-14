import React from "react";
import { Box } from "@mui/material";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, padding: 3, marginTop: "64px" }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
