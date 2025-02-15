import React, { useState, useContext } from "react";
import { logInUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import LogInForm from "../components/user/logInForm";

const LogInPage = () => {

    const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogIn = async (userData) => {
        try {
            const response = await logInUser(userData);
            if (response.data?.status) {
                const token = response.data.data?.accessToken;
                login(token); // Store the token in AuthContext
                navigate("/");
            } else {
                setAlert({ open: true, message: response.data?.message, severity: "error" });
            }
        } catch (err) {
            setAlert({ open: true, message: err?.message, severity: "error" });
        }
    };

    return (
        <LogInForm onLogIn={handleLogIn} />

    );
};

export default LogInPage;
