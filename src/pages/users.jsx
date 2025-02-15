import React, { useEffect, useState } from "react";
import UserTable from "../components/user/userTable";
import RegisterForm from "../components/user/userForm";
import { registerUser, getAllUsers, updateUser, deleteUser } from "../services/api";
import CustomAlert from "../components/common/customAlert";
import CustomLoader from "../components/common/customLoader";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (userData) => {

        try {
            setLoading(true);
            const response = await registerUser(userData);
            if (response.data?.status) {
                alert(response.data?.message);
                navigate("/");
            } else {
                alert(response.data?.message);
            }
        } catch (error) {
            console.error("Registration failed:", error.message);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <CustomLoader size={50} color="primary" />}
            <RegisterForm onRegister={handleRegister} />
        </div>
    );
};

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await getAllUsers();
            if (response.data?.status) {
                setUsers(response.data.data);
            } else {
                setAlert({ open: true, message: response.data?.message, severity: "error" });
            }
        } catch (error) {
            console.error("Failed to fetch users", error);
            setAlert({ open: true, message: error.message, severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (userData) => {
        try {
            setLoading(true);
            const response = await updateUser(userData.id, userData);
            if (response.data?.status) {
                const updatedUser = response.data.data;
                // Update the relevant user table data
                setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
                setAlert({ open: true, message: response.data?.message, severity: "success" });
            } else {
                setAlert({ open: true, message: response.data?.message, severity: "error" });
            }
        } catch (error) {
            console.error("Update failed:", error.message);
            setAlert({ open: true, message: error.message, severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (userId) => {

        try {
            setLoading(true);
            const response = await deleteUser(userId);
            // setUsers(users.filter(user => user.id !== userId)); // Remove the user form user list table
            getUsers(); // Load fresh user list to the table
            setAlert({ open: true, message: response.data?.message, severity: "success" });
        } catch (error) {
            console.error("Delete failed:", error);
            setAlert({ open: true, message: error.message, severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <CustomAlert
                open={alert.open}
                onClose={() => setAlert({ ...alert, open: false })}
                severity={alert.severity}
                message={alert.message}
            />
            <UserTable users={users} loading={loading} handleUpdateUser={handleUpdate} handleDeleteUser={handleDelete} />
        </div>
    );
};
