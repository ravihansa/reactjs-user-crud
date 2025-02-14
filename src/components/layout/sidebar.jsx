import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu as MenuIcon, Home, Business, People, ExpandLess, ExpandMore, Person, PersonAdd } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Box, Collapse } from "@mui/material";

const drawerWidth = 200;
const collapsedWidth = 60;
const topNavbarHeight = 50;

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleUserClick = () => {
        setUserOpen(!userOpen);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: open ? drawerWidth : collapsedWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: open ? drawerWidth : collapsedWidth,
                    marginTop: `${topNavbarHeight}px`, // Push below the top navbar
                    height: `calc(100vh - ${topNavbarHeight}px)`, // Full height
                    transition: "width 0.3s",
                    overflowX: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#f5f5f5",
                },
            }}
        >
            {/* Sidebar Toggle Button */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: open ? "flex-end" : "center", // Right when expanded, center when collapsed
                    padding: "10px",
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <List >
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon><Home /></ListItemIcon>
                        {open && <ListItemText primary="Dashboard" />}
                    </ListItemButton>
                </ListItem>
                <List >
                    {/* Main User Dropdown */}
                    <ListItemButton onClick={handleUserClick}>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                        {userOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {/* Sub-items */}
                    <Collapse in={userOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/users")}>
                                <ListItemIcon>
                                    <PersonAdd />
                                </ListItemIcon>
                                <ListItemText primary="Register" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/")}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="Details" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/users">
                        <ListItemIcon><Business /></ListItemIcon>
                        {open && <ListItemText primary="Companies" />}
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
