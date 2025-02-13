import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import UpdateUserModal from "./updateModal";
import DeleteConfirmationModal from "../common/deleteConfirmationModal";
import { TextField, Box, Typography, LinearProgress, Button } from "@mui/material";
import "../../styles/userList.css";


const UserTable = ({ users, loading, handleUpdateUser, handleDeleteUser }) => {
    const [searchText, setSearchText] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    // Filter users based on search input
    const filteredUsers = users.filter((user) =>
        user.userName.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleEdit = (user) => {
        setSelectedUser(user);
        setOpenModal(true);
    };

    const handleDelete = (id) => {
        setDeleteUserId(id);
        setOpenDeleteModal(true);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 80, disableColumnMenu: true },
        { field: "userName", headerName: "Username", flex: 1, disableColumnMenu: true },
        { field: "email", headerName: "Email", flex: 2, disableColumnMenu: true },
        { field: "fName", headerName: "First Name", flex: 1, disableColumnMenu: true },
        { field: "lName", headerName: "Last Name", flex: 1, disableColumnMenu: true },
        {
            field: "actions",
            headerName: "Actions",
            width: 180,
            sortable: false,
            renderCell: (params) => (
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(params.row)}
                        style={{ marginRight: 8 }}
                    >
                        Update
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        Delete
                    </Button>
                </Box>
            ),
        },
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
                rows={filteredUsers.length ? filteredUsers : []}
                columns={columns}
                pagination
                rowCount={filteredUsers.length}
                pageSize={5}
                pageSizeOptions={[5, 10, 20]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                className="custom-table"
                loading={loading} // Show loading spinner
                components={{
                    LoadingOverlay: LinearProgress
                }}
            />
            {/* Update User Modal */}
            {openModal && (
                <UpdateUserModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    user={selectedUser}
                    handleUpdateUser={handleUpdateUser}
                />
            )}
            {/* User Delete Confirmation Modal */}
            {openDeleteModal && <DeleteConfirmationModal
                open={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                itemId={deleteUserId}
                handleDelete={handleDeleteUser}
                itemName="this user"
                message="Are you sure you want to remove this user permanently?"
            />}
        </Box>
    );
};

export default UserTable;
