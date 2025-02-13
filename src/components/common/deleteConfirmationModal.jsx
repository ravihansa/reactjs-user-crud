import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "../../styles/deleteModal.css";

const DeleteConfirmationModal = ({ open, onClose, itemId, handleDelete, itemName, message }) => {

    const onConfirm = (e) => {
        e.preventDefault();
        handleDelete(itemId);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="delete-modal">
                <Typography variant="h6">Confirm Deletion</Typography>
                <Typography>
                    {message || `Are you sure you want to delete ${itemName}?`}
                </Typography>
                <Box className="modal-actions">
                    <Button variant="contained" onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={onConfirm} color="error">
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteConfirmationModal;
