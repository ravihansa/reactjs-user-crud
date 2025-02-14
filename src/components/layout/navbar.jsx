import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../../styles/navbar.css";

const Navbar = () => {
    return (
        <AppBar position="fixed" className="navbar" sx={{ zIndex: 3 }}>
            <Toolbar>
                <Typography variant="h6" className="navbar-title" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
