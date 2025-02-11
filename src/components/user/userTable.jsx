import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box, Typography } from "@mui/material";
import "../../styles/userList.css";

const UserTable = ({ users }) => {
    const [searchText, setSearchText] = useState("");

    // Filter users based on search input
    const filteredUsers = users.filter((user) =>
        user.userName.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        { field: "id", headerName: "ID", width: 80, disableColumnMenu: true },
        { field: "userName", headerName: "Username", flex: 1, disableColumnMenu: true },
        { field: "email", headerName: "Email", flex: 2, disableColumnMenu: true },
        { field: "fName", headerName: "First Name", flex: 1, disableColumnMenu: true },
        { field: "lName", headerName: "Last Name", flex: 1, disableColumnMenu: true },
    ];

    return (
        <Box className="user-table-container">
            <Typography variant="h5" className="table-title">
                User List
            </Typography>
            <TextField
                label="Search by Username"
                variant="outlined"
                size="small"
                className="search-input"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <DataGrid
                rows={filteredUsers}
                columns={columns}
                pageSizeOptions={[5, 10, 20]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                className="custom-table"
            />
        </Box>
    );
};

export default UserTable;
