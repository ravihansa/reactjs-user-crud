import React from "react";
import { registerUser } from "../services/api";
import RegisterForm from "../components/user/userForm";

const RegisterPage = () => {
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

export default RegisterPage;
