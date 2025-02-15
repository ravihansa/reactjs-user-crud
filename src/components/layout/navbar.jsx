import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import "../../styles/navbar.css";

const Navbar = () => {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <AppBar position="fixed" className="navbar" sx={{ zIndex: 3 }}>
            <Toolbar>
                <Typography variant="h6" className="navbar-title" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <Link underline="none" onClick={handleLogout} className="logout-button">
                    Logout
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
