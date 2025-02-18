import React, { useContext } from "react";
import { Box } from "@mui/material";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { AuthContext } from "../../context/authContext";

const Layout = ({ children }) => {
    const { token } = useContext(AuthContext);
    // If user is not authenticated, hide the layout
    if (!token) {
        return <>{children}</>;
    }

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
