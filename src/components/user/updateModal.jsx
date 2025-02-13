import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import "../../styles/updateUser.css";

const UpdateUserModal = ({ open, onClose, user, handleUpdateUser }) => {
    const [formData, setFormData] = useState({
        id: user?.id,
        userName: user?.userName || "",
        email: user?.email || "",
        fName: user?.fName || "",
        lName: user?.lName || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateUser(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="modal-container">
                <Typography variant="h6">Update User</Typography>
                <form onSubmit={handleSubmit} className="modal-form">
                    <TextField
                        name="userName"
                        label="Username"
                        fullWidth
                        value={formData.userName}
                        onChange={handleChange}
                        margin="dense"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        margin="dense"
                    />
                    <TextField
                        name="fName"
                        label="First Name"
                        fullWidth
                        value={formData.fName}
                        onChange={handleChange}
                        margin="dense"
                    />
                    <TextField
                        name="lName"
                        label="Last Name"
                        fullWidth
                        value={formData.lName}
                        onChange={handleChange}
                        margin="dense"
                    />
                    <Box className="modal-actions">
                        <Button onClick={onClose} variant="contained" color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default UpdateUserModal;
