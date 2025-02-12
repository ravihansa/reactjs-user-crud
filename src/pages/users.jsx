import React, { useEffect, useState } from "react";
import UserTable from "../components/user/userTable";
import RegisterForm from "../components/user/userForm";
import { registerUser, getAllUsers } from "../services/api";


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

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await getAllUsers();
                if (response.data?.status) {
                    setUsers(response.data.data);
                } else {
                    alert(response.data?.message);
                }
            } catch (error) {
                console.error("Error fetching users", error);
                alert(error.message);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    return (
        <div>
            <UserTable users={users} loading={loading} />
        </div>
    );
};
