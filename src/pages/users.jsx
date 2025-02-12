import React, { useEffect, useState } from "react";
import UserTable from "../components/user/userTable";
import RegisterForm from "../components/user/userForm";
import { registerUser, getAllUsers } from "../services/api";
import { Alert, Snackbar } from "@mui/material";


export const RegisterPage = () => {
    const handleRegister = async (userData) => {
        try {
            const response = await registerUser(userData);
            if (response.data?.status) {
                alert(response.data?.message);
            } else {
                alert(response.data?.message);
            }
        } catch (error) {
            console.error("Registration failed:", error);
            alert(error.message);
        }
    };

    return <RegisterForm onRegister={handleRegister} />;
};

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await getAllUsers();
                if (response.data?.status) {
                    setUsers(response.data.data);
                } else {
                    setError(response.data?.message);
                    setOpenAlert(true);
                }
            } catch (error) {
                console.error("Failed to fetch users", error);
                setError("Failed to fetch users.");
                setOpenAlert(true);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    return (
        <div>
            <Snackbar
                open={openAlert}
                autoHideDuration={5000}
                onClose={() => setOpenAlert(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert
                    severity="error"
                    onClose={() => setOpenAlert(false)}>
                    {error}
                </Alert>
            </Snackbar>
            <UserTable users={users} loading={loading} />
        </div>
    );
};
